import os
import logging
from ultralytics import YOLO

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ML_Inference")

# Determine model weights path candidates
BASE_DIR = "/home/jairus/Antonius Jairus/Projects/Palindrome"
weights_candidates = [
    os.path.join(os.path.dirname(__file__), "best.pt"),
    os.path.join(BASE_DIR, "runs/detect/train-7/weights/best.pt"),
    os.path.join(BASE_DIR, "runs/detect/train-6/weights/best.pt"),
    os.path.join(BASE_DIR, "yolov8s.pt"),
]

model_path = None
for candidate in weights_candidates:
    if os.path.exists(candidate):
        model_path = candidate
        break

if not model_path:
    raise FileNotFoundError("Could not find best.pt or any candidate model weights.")

logger.info(f"Loading YOLO model from: {model_path}")
model = YOLO(model_path)

def detect_receipt(image_path):
    """
    Detects the receipt in the image.
    Returns: (x, y, w, h) bounding box coordinates of the detected receipt,
             or None if no receipt is detected.
    """
    logger.info(f"Running receipt detection on: {image_path}")
    results = model(image_path)
    
    if not results or len(results) == 0:
        logger.warning("No detection results returned from YOLO model.")
        return None
        
    boxes = results[0].boxes
    if len(boxes) == 0:
        logger.warning("No bounding boxes detected by YOLO model.")
        return None
        
    # Find the box with class 0 (receipt) and highest confidence score
    best_box = None
    best_conf = -1.0
    
    for box in boxes:
        cls_id = int(box.cls[0].item())
        conf = float(box.conf[0].item())
        if cls_id == 0:  # receipt
            if conf > best_conf:
                best_conf = conf
                best_box = box
                
    # Fallback to the highest confidence box overall if class 0 is not found
    if best_box is None:
        logger.warning("No explicit receipt class (0) box found. Falling back to highest confidence box.")
        for box in boxes:
            conf = float(box.conf[0].item())
            if conf > best_conf:
                best_conf = conf
                best_box = box
                
    if best_box is None:
        return None
        
    # Get xyxy coordinates as list of floats
    xyxy = best_box.xyxy[0].tolist()
    x1, y1, x2, y2 = map(int, xyxy)
    
    # Calculate top-left corner (x, y) and width, height (w, h)
    x = x1
    y = y1
    w = x2 - x1
    h = y2 - y1
    
    logger.info(f"Detected receipt bounding box: x={x}, y={y}, w={w}, h={h} (conf={best_conf:.2f})")
    return (x, y, w, h)
