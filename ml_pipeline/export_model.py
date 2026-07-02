import os
import sys
# pyrefly: ignore [missing-import]
from ultralytics import YOLO

def main():
    print("=" * 70)
    print("Palindrome Document AI: YOLOv8 ONNX Export Utility")
    print("=" * 70)
    
    # Path to the trained best weights file
    # Defaulting to the standard ultralytics run directory structure
    weights_path = os.path.abspath("runs/detect/palindrome_receipt_detector/weights/best.pt")
    
    if not os.path.exists(weights_path):
        print(f"Weights file not found at default location: {weights_path}")
        weights_path = input("Please specify the path to your best.pt weights file: ").strip()
        weights_path = os.path.abspath(weights_path)
        
        if not os.path.exists(weights_path):
            print("Error: Target weights file does not exist. Exiting.")
            sys.exit(1)
            
    print(f"Loading weights from: {weights_path}")
    
    try:
        # Load the PyTorch PyModel
        model = YOLO(weights_path)
        
        # Export the model to ONNX format
        # - format='onnx': Export to Open Neural Network Exchange format.
        #   This is crucial for faster, lightweight CPU inference when deployed on FastAPI.
        # - imgsz=1024: Matching training image resolution.
        # - simplify=True: Applies ONNX-Simplifier to merge redundant operations for faster execution.
        # - dynamic=False: Keeps static input dimensions for predictable, highly optimized inference speed.
        print("\nExporting model to ONNX format...")
        onnx_file_path = model.export(
            format='onnx',
            imgsz=1024,
            simplify=True,
            dynamic=False
        )
        
        print("\n" + "=" * 70)
        print("MODEL EXPORT COMPLETED SUCCESSFULLY!")
        print(f"ONNX Model saved at: {onnx_file_path}")
        print("\n[WHY ONNX FOR PRODUCTION?]")
        print("1. Speed: ONNX models execute significantly faster on CPU/FastAPI servers than full PyTorch models.")
        print("2. Memory Footprint: Cuts memory consumption in production pipelines (no need to load the torch package).")
        print("3. Framework Independent: Seamlessly runs on any CPU container backend using 'onnxruntime'.")
        print("=" * 70)
        
    except Exception as e:
        print("\n" + "!" * 70)
        print(f"An error occurred during model export: {str(e)}")
        print("!" * 70)
        sys.exit(1)

if __name__ == "__main__":
    main()
