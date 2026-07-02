import os
import sys
import shutil
import random
from PIL import Image

def main():
    print("=" * 70)
    print("SROIE 2019 YOLOv8 Receipt Dataset Stage & Convert Mission")
    print("=" * 70)

    # Source paths
    src_base = "/home/jairus/Downloads/Kaggle_ds_2/SROIE2019"
    train_img_dir = os.path.join(src_base, "train", "img")
    train_box_dir = os.path.join(src_base, "train", "box")
    test_img_dir = os.path.join(src_base, "test", "img")
    test_box_dir = os.path.join(src_base, "test", "box")

    # Destination paths
    dest_base = "/home/jairus/Antonius Jairus/Projects/Palindrome/dataset"
    train_img_dest = os.path.join(dest_base, "train", "images")
    train_lbl_dest = os.path.join(dest_base, "train", "labels")
    val_img_dest = os.path.join(dest_base, "val", "images")
    val_lbl_dest = os.path.join(dest_base, "val", "labels")

    # Construct destination directories
    for path in [train_img_dest, train_lbl_dest, val_img_dest, val_lbl_dest]:
        os.makedirs(path, exist_ok=True)
        # Clear existing files if any to ensure clean staging
        for f in os.listdir(path):
            file_path = os.path.join(path, f)
            if os.path.isfile(file_path):
                os.unlink(file_path)

    # Collect all image-annotation pairs
    pairs = []
    
    # Process train subdirectory
    if os.path.exists(train_img_dir):
        for f in os.listdir(train_img_dir):
            if f.lower().endswith(".jpg"):
                base_name = os.path.splitext(f)[0]
                img_path = os.path.join(train_img_dir, f)
                # Check for XML or TXT annotation
                xml_path = os.path.join(train_box_dir, base_name + ".xml")
                txt_path = os.path.join(train_box_dir, base_name + ".txt")
                
                anno_path = None
                if os.path.exists(xml_path):
                    anno_path = xml_path
                elif os.path.exists(txt_path):
                    anno_path = txt_path
                
                if anno_path:
                    pairs.append((img_path, anno_path, f, base_name))
                else:
                    print(f"Warning: No annotation file found for train image {f}")
    else:
        print(f"Error: Train image directory not found at {train_img_dir}")
        sys.exit(1)

    # Process test subdirectory
    if os.path.exists(test_img_dir):
        for f in os.listdir(test_img_dir):
            if f.lower().endswith(".jpg"):
                base_name = os.path.splitext(f)[0]
                img_path = os.path.join(test_img_dir, f)
                # Check for XML or TXT annotation
                xml_path = os.path.join(test_box_dir, base_name + ".xml")
                txt_path = os.path.join(test_box_dir, base_name + ".txt")
                
                anno_path = None
                if os.path.exists(xml_path):
                    anno_path = xml_path
                elif os.path.exists(txt_path):
                    anno_path = txt_path
                
                if anno_path:
                    pairs.append((img_path, anno_path, f, base_name))
                else:
                    print(f"Warning: No annotation file found for test image {f}")
    else:
        print(f"Error: Test image directory not found at {test_img_dir}")
        sys.exit(1)

    print(f"Total valid image-annotation pairs collected: {len(pairs)}")

    # Split: 80% Training / 20% Validation
    random.seed(42)
    random.shuffle(pairs)
    
    split_idx = int(len(pairs) * 0.8)
    train_pairs = pairs[:split_idx]
    val_pairs = pairs[split_idx:]

    print(f"Dataset split: {len(train_pairs)} training items, {len(val_pairs)} validation items.")

    def parse_voc_xml(xml_path, img_w, img_h):
        import xml.etree.ElementTree as ET
        tree = ET.parse(xml_path)
        root = tree.getroot()
        yolo_boxes = []
        for obj in root.findall('object'):
            name = obj.find('name').text
            # We map any object to class 0 (receipt) as per the exact mapping
            bndbox = obj.find('bndbox')
            xmin = float(bndbox.find('xmin').text)
            ymin = float(bndbox.find('ymin').text)
            xmax = float(bndbox.find('xmax').text)
            ymax = float(bndbox.find('ymax').text)
            
            # Normalize coordinates
            x_center = ((xmin + xmax) / 2.0) / img_w
            y_center = ((ymin + ymax) / 2.0) / img_h
            w = (xmax - xmin) / img_w
            h = (ymax - ymin) / img_h
            
            x_center = max(0.0, min(1.0, x_center))
            y_center = max(0.0, min(1.0, y_center))
            w = max(0.0, min(1.0, w))
            h = max(0.0, min(1.0, h))
            
            yolo_boxes.append(f"0 {x_center:.6f} {y_center:.6f} {w:.6f} {h:.6f}")
        return yolo_boxes

    def parse_sroie_txt(txt_path, img_w, img_h):
        # SROIE contains OCR boxes: x1,y1,x2,y2,x3,y3,x4,y4,text
        # We calculate the enclosing bounding box of the whole receipt
        xmin_receipt = float('inf')
        ymin_receipt = float('inf')
        xmax_receipt = float('-inf')
        ymax_receipt = float('-inf')
        
        has_boxes = False
        with open(txt_path, "r", encoding="utf-8", errors="ignore") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                parts = line.split(",", 8)
                if len(parts) >= 8:
                    try:
                        x1, y1, x2, y2, x3, y3, x4, y4 = map(float, parts[:8])
                        # Get bounds of this text box
                        box_xmin = min(x1, x2, x3, x4)
                        box_xmax = max(x1, x2, x3, x4)
                        box_ymin = min(y1, y2, y3, y4)
                        box_ymax = max(y1, y2, y3, y4)
                        
                        # Update receipt bounds
                        xmin_receipt = min(xmin_receipt, box_xmin)
                        ymin_receipt = min(ymin_receipt, box_ymin)
                        xmax_receipt = max(xmax_receipt, box_xmax)
                        ymax_receipt = max(ymax_receipt, box_ymax)
                        has_boxes = True
                    except ValueError:
                        continue
        
        if not has_boxes:
            # Fallback to entire image if no boxes found
            xmin_receipt, ymin_receipt, xmax_receipt, ymax_receipt = 0.0, 0.0, float(img_w), float(img_h)

        # Normalize coordinates
        x_center = ((xmin_receipt + xmax_receipt) / 2.0) / img_w
        y_center = ((ymin_receipt + ymax_receipt) / 2.0) / img_h
        w = (xmax_receipt - xmin_receipt) / img_w
        h = (ymax_receipt - ymin_receipt) / img_h
        
        x_center = max(0.0, min(1.0, x_center))
        y_center = max(0.0, min(1.0, y_center))
        w = max(0.0, min(1.0, w))
        h = max(0.0, min(1.0, h))
        
        return [f"0 {x_center:.6f} {y_center:.6f} {w:.6f} {h:.6f}"]

    def process_split(split_pairs, img_dest_dir, lbl_dest_dir):
        for img_path, anno_path, img_name, base_name in split_pairs:
            # Load image to get width and height
            try:
                with Image.open(img_path) as img:
                    img_w, img_h = img.size
            except Exception as e:
                print(f"Skipping image {img_name} due to error: {e}")
                continue

            # Parse coordinates
            if anno_path.lower().endswith(".xml"):
                yolo_boxes = parse_voc_xml(anno_path, img_w, img_h)
            else:
                yolo_boxes = parse_sroie_txt(anno_path, img_w, img_h)

            if yolo_boxes:
                # Copy image
                shutil.copy2(img_path, os.path.join(img_dest_dir, img_name))
                
                # Write labels
                lbl_name = base_name + ".txt"
                with open(os.path.join(lbl_dest_dir, lbl_name), "w", encoding="utf-8") as lf:
                    lf.write("\n".join(yolo_boxes) + "\n")

    print("\nStaging and converting training split...")
    process_split(train_pairs, train_img_dest, train_lbl_dest)
    print("Staging and converting validation split...")
    process_split(val_pairs, val_img_dest, val_lbl_dest)

    # Dynamic data.yaml generation
    yaml_content = f"""# YOLOv8 Receipt Dataset Configuration
path: {dest_base}
train: train/images
val: val/images

nc: 1
names:
  0: receipt
"""
    yaml_path = os.path.join(dest_base, "data.yaml")
    with open(yaml_path, "w", encoding="utf-8") as yf:
        yf.write(yaml_content)
    print(f"\nSuccessfully generated data.yaml configuration at {yaml_path}")

    # Validation Audit
    print("\nRunning Validation Audit...")
    train_images = set(os.listdir(train_img_dest))
    train_labels = set(os.listdir(train_lbl_dest))
    val_images = set(os.listdir(val_img_dest))
    val_labels = set(os.listdir(val_lbl_dest))

    # 1:1 Match Verification
    train_errors = 0
    val_errors = 0
    
    for img in train_images:
        lbl = os.path.splitext(img)[0] + ".txt"
        if lbl not in train_labels:
            print(f"Error: Training image {img} has no matching label file.")
            train_errors += 1
            
    for lbl in train_labels:
        img = os.path.splitext(lbl)[0] + ".jpg"
        if img not in train_images:
            print(f"Error: Training label {lbl} has no matching image file.")
            train_errors += 1

    for img in val_images:
        lbl = os.path.splitext(img)[0] + ".txt"
        if lbl not in val_labels:
            print(f"Error: Validation image {img} has no matching label file.")
            val_errors += 1

    for lbl in val_labels:
        img = os.path.splitext(lbl)[0] + ".jpg"
        if img not in val_images:
            print(f"Error: Validation label {lbl} has no matching image file.")
            val_errors += 1

    print("=" * 70)
    print("DATASET INVENTORY REPORT")
    print("=" * 70)
    print(f"Training Images:   {len(train_images)}")
    print(f"Training Labels:   {len(train_labels)}")
    print(f"Validation Images: {len(val_images)}")
    print(f"Validation Labels: {len(val_labels)}")
    print(f"Total Staged Files: {len(train_images) + len(train_labels) + len(val_images) + len(val_labels)}")
    print("-" * 70)
    print(f"Training 1:1 Match Status:   {'PASS' if train_errors == 0 else 'FAIL (' + str(train_errors) + ' errors)'}")
    print(f"Validation 1:1 Match Status: {'PASS' if val_errors == 0 else 'FAIL (' + str(val_errors) + ' errors)'}")
    print("=" * 70)

if __name__ == "__main__":
    main()
