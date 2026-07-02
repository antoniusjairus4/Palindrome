import os
import re
import logging
from datetime import datetime
from pymongo import MongoClient
from bson.objectid import ObjectId

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("DB_LogReceipt")

# MongoDB connection configuration
def get_mongo_uri():
    env_path = "/home/jairus/Antonius Jairus/Projects/Palindrome/server/.env"
    if os.path.exists(env_path):
        with open(env_path, "r") as f:
            for line in f:
                if line.startswith("MONGO_URI="):
                    return line.strip().split("MONGO_URI=")[1]
    return os.environ.get("MONGO_URI", "mongodb://localhost:27017/curie_coin")

def get_mongo_client():
    uri = get_mongo_uri()
    # Mask password for logging
    masked_uri = re.sub(r':([^@]+)@', ':******@', uri)
    logger.info(f"Connecting to MongoDB with URI: {masked_uri}")
    return MongoClient(uri)

def check_db_health():
    """
    Checks the connection health of the MongoDB database.
    """
    client = None
    try:
        client = get_mongo_client()
        # Ping the admin database to verify connection
        client.admin.command('ping')
        logger.info("Database connection is healthy.")
        return True
    except Exception as e:
        logger.error(f"Database connection health check failed: {str(e)}")
        return False
    finally:
        if client:
            client.close()

def local_classify(desc):
    d = desc.lower()
    if any(k in d for k in ['aws', 'cloud', 'host', 'server', 'digitalocean', 'vercel', 'heroku', 'netlify']):
        return 'Bills'
    if any(k in d for k in ['bill', 'electricity', 'water', 'gas', 'rent', 'phone', 'internet']):
        return 'Bills'
    if any(k in d for k in ['zomato', 'swiggy', 'food', 'restaurant', 'cafe', 'coffee', 'starbucks', 'dinner', 'lunch', 'breakfast']):
        return 'Food'
    if any(k in d for k in ['amazon', 'flipkart', 'shop', 'store', 'buy', 'clothing', 'grocery', 'supermarket']):
        return 'Shopping'
    if any(k in d for k in ['uber', 'ola', 'cab', 'flight', 'train', 'travel', 'fuel', 'petrol', 'gasoline']):
        return 'Travel'
    if any(k in d for k in ['netflix', 'spotify', 'movie', 'show', 'entertainment', 'cinema', 'game', 'steam']):
        return 'Entertainment'
    if any(k in d for k in ['salary', 'paycheck', 'dividend', 'interest', 'bonus']):
        return 'Salary'
    if any(k in d for k in ['income', 'deposit', 'refund']):
        return 'Income'
    return 'Misc'

def save_transaction(merchant, date, amount, raw_text, receipt_image_path, user_id=None):
    """
    Logs the receipt transaction details into the database.
    If user_id is not specified or invalid, falls back to the first user found in the database.
    """
    client = get_mongo_client()
    try:
        db = client["curie_coin"]
        
        # 1. Resolve User ID
        resolved_user_id = None
        
        # If user_id is passed, validate it
        if user_id:
            try:
                resolved_user_id = ObjectId(user_id)
            except Exception:
                logger.warning(f"Provided user_id '{user_id}' is not a valid ObjectId. Searching for fallback user.")
        
        # If no user_id or invalid, look for first user in the users collection
        if not resolved_user_id:
            first_user = db["users"].find_one()
            if first_user:
                resolved_user_id = first_user["_id"]
                logger.info(f"Using fallback user ID: {resolved_user_id} ({first_user.get('email', 'No Email')})")
            else:
                raise ValueError("No user found in the 'users' collection to associate the transaction with.")
                
        # 2. Construct transaction document
        category = local_classify(merchant)
        
        transaction_doc = {
            "userId": resolved_user_id,
            "title": merchant,
            "amount": float(amount),
            "category": category,
            "type": "expense",
            "notes": f"Processed via YOLOv8 & EasyOCR pipeline on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
            "date": date if isinstance(date, datetime) else datetime.now(),
            "hasReceipt": True,
            "receiptImage": receipt_image_path,
            "hasImageProof": True,
            "proofImage": receipt_image_path,
            "extractedText": raw_text,
            "createdAt": datetime.utcnow(),
            "updatedAt": datetime.utcnow()
        }
        
        # 3. Insert transaction
        result = db["transactions"].insert_one(transaction_doc)
        transaction_doc["_id"] = str(result.inserted_id)
        transaction_doc["userId"] = str(transaction_doc["userId"])
        # Format date for response JSON
        if isinstance(transaction_doc["date"], datetime):
            transaction_doc["date"] = transaction_doc["date"].isoformat()
        if isinstance(transaction_doc["createdAt"], datetime):
            transaction_doc["createdAt"] = transaction_doc["createdAt"].isoformat()
        if isinstance(transaction_doc["updatedAt"], datetime):
            transaction_doc["updatedAt"] = transaction_doc["updatedAt"].isoformat()
            
        logger.info(f"Transaction successfully saved to database with ID: {result.inserted_id}")
        return transaction_doc
    except Exception as e:
        logger.error(f"Failed to save transaction to database: {str(e)}")
        raise e
    finally:
        client.close()
