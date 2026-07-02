import os
import shutil
import logging
from datetime import datetime
from fastapi import FastAPI, File, UploadFile, Form, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

# Import local modules
from app.ml.inference import detect_receipt
from app.ml.ocr import extract_text
from app.ml.parser import parse_receipt_text
from app.db.log_receipt import save_transaction, check_db_health

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("ReceiptPipeline")

app = FastAPI(title="Palindrome Receipt Processing Pipeline API")

# Add CORS middleware to support client requests from other origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "/home/jairus/Antonius Jairus/Projects/Palindrome/app/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/health")
def health_check():
    """
    Checks pipeline system health and database connectivity.
    """
    db_ok = check_db_health()
    if db_ok:
        return {"status": "healthy", "database": "connected"}
    else:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection is unavailable or offline."
        )

@app.post("/upload")
async def upload_receipt(
    file: UploadFile = File(...),
    userId: str = Form(None)
):
    """
    Endpoint to upload a receipt image, detect the receipt, crop it, perform OCR,
    parse the content, and save the transaction entry into MongoDB.
    """
    logger.info(f"Received file upload request: {file.filename}")
    
    # Verify file is an image
    if not file.content_type.startswith("image/"):
        logger.warning(f"Rejected non-image upload: {file.content_type}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Uploaded file must be a valid image."
        )
        
    # Save the uploaded file temporarily
    raw_filename = f"raw_{file.filename}"
    raw_file_path = os.path.join(UPLOAD_DIR, raw_filename)
    
    try:
        with open(raw_file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
        logger.info(f"Staged raw upload image at: {raw_file_path}")
    except Exception as e:
        logger.error(f"Failed to save uploaded file: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to save uploaded file on server."
        )

    # Step 1 & 2: Detect receipt bounding box
    try:
        box = detect_receipt(raw_file_path)
    except Exception as e:
        logger.error(f"Error during receipt detection: {str(e)}")
        # Clean up staged file
        if os.path.exists(raw_file_path):
            os.remove(raw_file_path)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Inference engine failure during receipt detection: {str(e)}"
        )

    if not box:
        logger.warning(f"No receipt detected in image: {file.filename}")
        # Clean up staged file
        if os.path.exists(raw_file_path):
            os.remove(raw_file_path)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Missing detection: No receipt document could be identified in the uploaded image."
        )

    x, y, w, h = box

    # Step 3: Crop image to receipt area (ROI)
    cropped_filename = f"cropped_{file.filename}"
    cropped_file_path = os.path.join(UPLOAD_DIR, cropped_filename)
    
    try:
        logger.info(f"Cropping image to ROI: x={x}, y={y}, w={w}, h={h}")
        with Image.open(raw_file_path) as img:
            # crop expects (left, upper, right, lower) coordinates
            cropped_img = img.crop((x, y, x + w, y + h))
            cropped_img.save(cropped_file_path)
        logger.info(f"Saved cropped receipt ROI at: {cropped_file_path}")
    except Exception as e:
        logger.error(f"Image cropping operation failed: {str(e)}")
        if os.path.exists(raw_file_path):
            os.remove(raw_file_path)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Image processing failed during cropping: {str(e)}"
        )

    # Step 4: Extract text via OCR
    raw_text = ""
    try:
        raw_text = extract_text(cropped_file_path)
    except Exception as e:
        logger.error(f"OCR text extraction failed: {str(e)}")
        # Clean up files
        for p in [raw_file_path, cropped_file_path]:
            if os.path.exists(p):
                os.remove(p)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"OCR execution failure: {str(e)}"
        )

    # Step 5: Parse OCR text
    parsed_data = {}
    try:
        parsed_data = parse_receipt_text(raw_text)
    except Exception as e:
        logger.error(f"Failed to parse OCR text: {str(e)}")
        # Continue with defaults if parsing fails
        parsed_data = {
            "merchant": "Unknown Merchant",
            "date": datetime.now(),
            "amount": 0.0
        }

    # Step 6: Store results in database
    transaction = None
    try:
        transaction = save_transaction(
            merchant=parsed_data["merchant"],
            date=parsed_data["date"],
            amount=parsed_data["amount"],
            raw_text=raw_text,
            receipt_image_path=cropped_file_path,
            user_id=userId
        )
    except Exception as e:
        logger.error(f"Database logging failed: {str(e)}")
        # Clean up files
        for p in [raw_file_path, cropped_file_path]:
            if os.path.exists(p):
                os.remove(p)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database logging error: {str(e)}"
        )

    # Clean up the raw file (we keep the cropped ROI as the proof image)
    try:
        if os.path.exists(raw_file_path):
            os.remove(raw_file_path)
            logger.info("Successfully cleaned up raw upload image.")
    except Exception as e:
        logger.warning(f"Failed to clean up raw image file: {str(e)}")

    # Step 7: Return response
    return {
        "status": "success",
        "data": {
            "transaction": transaction,
            "ocr_text": raw_text,
            "bounding_box": {"x": x, "y": y, "w": w, "h": h}
        }
    }
