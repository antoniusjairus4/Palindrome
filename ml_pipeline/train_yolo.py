import os
import sys
# pyrefly: ignore [missing-import]
from ultralytics import YOLO

def main():
    print("=" * 70)
    print("Palindrome Document AI: YOLOv8 Training Pipeline Initializer")
    print("=" * 70)
    
    # Path to the dataset configuration file
    dataset_yaml_path = os.path.abspath("dataset.yaml")
    
    if not os.path.exists(dataset_yaml_path):
        print(f"Error: Dataset configuration file not found at: {dataset_yaml_path}")
        print("Please ensure 'dataset.yaml' exists in the same directory as this script.")
        sys.exit(1)
        
    print(f"Loading dataset configuration from: {dataset_yaml_path}")
    
    try:
        # Load YOLOv8s (small) model for an optimal trade-off between text resolution accuracy and speed.
        # Use 'yolov8n.pt' (nano) if GPU memory is highly constrained.
        model_name = 'yolov8s.pt'
        print(f"Initializing YOLOv8 model: {model_name}...")
        model = YOLO(model_name)
        
        # Start training sequence
        # Hyperparameters for Document AI:
        # - imgsz=1024: Receipt images are tall, dense, and contain small text details. 
        #   Downsampling to 640px will destroy character boundaries and render bounding boxes inaccurate.
        # - epochs=100: Number of training epochs.
        # - patience=15: Early stopping patience. Stops training if validation mAP does not improve for 15 epochs.
        # - device='cpu': Automatically select CUDA, MPS (Apple Silicon), or fallback to CPU.
        # - workers=4: Dataloader workers count. Adjust based on CPU cores.
        # - batch=16: Batch size. Reduce if CUDA Out-Of-Memory (OOM) occurs.
        # - name='palindrome_receipt_detector': Folder name for the runs.
        print("\nBeginning training sequence...")
        results = model.train(
            data=dataset_yaml_path,
            epochs=100,
            patience=15,
            imgsz=1024,
            device='cpu',
            workers=4,
            batch=16,
            name='palindrome_receipt_detector',
            exist_ok=True
        )
        
        # Print path to best weights
        save_dir = results.save_dir
        best_weights_path = os.path.join(save_dir, "weights", "best.pt")
        print("\n" + "=" * 70)
        print("TRAINING SEQUENCE SUCCESSFULLY COMPLETED!")
        print(f"Best model weights saved at: {best_weights_path}")
        print(f"Training runs and metrics logs saved at: {save_dir}")
        print("=" * 70)
        
    except Exception as e:
        print("\n" + "!" * 70)
        print(f"An error occurred during training sequence execution: {str(e)}")
        print("!" * 70)
        sys.exit(1)

if __name__ == "__main__":
    main()
