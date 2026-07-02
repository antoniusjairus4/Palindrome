import logging
import easyocr
import numpy as np

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ML_OCR")

# Cached reader instance
_reader = None

def get_ocr_reader():
    global _reader
    if _reader is None:
        logger.info("Initializing EasyOCR Reader (English)...")
        # Initialize reader (will automatically download models to ~/.EasyOCR/model/ if needed)
        _reader = easyocr.Reader(['en'], gpu=False)
    return _reader

def extract_text(image_path_or_array):
    """
    Extracts text from an image (file path or numpy array or PIL image) using EasyOCR.
    Returns: a single string containing the extracted text joined by newlines.
    """
    logger.info("Starting text extraction from cropped receipt ROI...")
    try:
        reader = get_ocr_reader()
        
        # If it's a PIL image, convert it to numpy array for EasyOCR
        if hasattr(image_path_or_array, 'convert'):
            # Convert PIL image to RGB numpy array
            image_path_or_array = np.array(image_path_or_array.convert('RGB'))
            
        results = reader.readtext(image_path_or_array)
        
        # Extract text elements
        text_lines = []
        for bbox, text, conf in results:
            text_lines.append(text.strip())
            
        full_text = "\n".join(text_lines)
        logger.info(f"Extracted {len(text_lines)} lines of text from receipt ROI.")
        return full_text
    except Exception as e:
        logger.error(f"OCR execution failed: {str(e)}")
        raise e
