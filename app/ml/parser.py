import re
import logging
from datetime import datetime

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ML_Parser")

def parse_receipt_text(text):
    """
    Parses OCR text to extract:
    - Merchant name (Title)
    - Date
    - Total Amount
    Returns: dict with 'merchant', 'date', 'amount'
    """
    logger.info("Parsing OCR text for key receipt fields...")
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    # 1. Merchant Extraction
    merchant = "Unknown Merchant"
    for line in lines[:4]:
        # Clean line to check if it's mostly alphabetical/words
        clean = re.sub(r'[^a-zA-Z\s]', '', line).strip()
        # Avoid first lines that are just dates, phone numbers, or standard phrases
        if len(clean) > 3 and not any(k in clean.lower() for k in ["date", "tax", "tel", "phone", "welcome", "receipt", "invoice", "cashier"]):
            merchant = line
            break
            
    # 2. Date Extraction
    date_patterns = [
        r'\b(\d{4})[-/](\d{2})[-/](\d{2})\b',  # YYYY-MM-DD
        r'\b(\d{2})[-/](\d{2})[-/](\d{4})\b',  # DD/MM/YYYY or MM/DD/YYYY
        r'\b(\d{2})[-/](\d{2})[-/](\d{2})\b',  # DD/MM/YY or MM/DD/YY
    ]
    
    found_date = datetime.now()
    date_str = None
    for pattern in date_patterns:
        match = re.search(pattern, text)
        if match:
            try:
                g = match.groups()
                if len(g[0]) == 4: # YYYY-MM-DD
                    date_str = f"{g[0]}-{g[1]}-{g[2]}"
                    found_date = datetime.strptime(date_str, "%Y-%m-%d")
                else: # DD/MM/YYYY or MM/DD/YYYY
                    for fmt in ["%d/%m/%Y", "%m/%d/%Y", "%d-%m-%Y", "%m-%d-%Y", "%d/%m/%y", "%m/%d/%y"]:
                        try:
                            found_date = datetime.strptime(match.group(0).replace('-', '/'), fmt)
                            date_str = found_date.strftime("%Y-%m-%d")
                            break
                        except ValueError:
                            continue
                if date_str:
                    break
            except Exception:
                continue
                
    # 3. Total Amount Extraction
    amount = 0.0
    total_patterns = [
        r'(?:total|tot|due|net|pay|amount|balance)\s*(?:due|amount|usd|rs|sgd|rm)?\s*[:\$\s\-]*\s*([0-9]+\.[0-9]{2})\b',
        r'(?:total|tot|due|net|pay|amount|balance)\s*[:\$\s\-]*\s*([0-9]+\.[0-9]{2})\b',
    ]
    
    amount_candidates = []
    for line in lines:
        for pattern in total_patterns:
            matches = re.findall(pattern, line, re.IGNORECASE)
            for m in matches:
                try:
                    amount_candidates.append(float(m))
                except ValueError:
                    continue
                    
    if amount_candidates:
        amount = max(amount_candidates)
    else:
        # Fallback: Find all decimal numbers and pick the largest one (often the total is the largest number)
        all_decimals = re.findall(r'\b[0-9]+\.[0-9]{2}\b', text)
        decimal_values = []
        for d in all_decimals:
            try:
                val = float(d)
                if val < 50000.0:  # Exclude extreme outliers
                    decimal_values.append(val)
            except ValueError:
                continue
        if decimal_values:
            amount = max(decimal_values)

    logger.info(f"Parsed results: Merchant='{merchant}', Date='{found_date.strftime('%Y-%m-%d')}', Amount={amount}")
    return {
        "merchant": merchant,
        "date": found_date,
        "amount": amount
    }
