import mongoose from 'mongoose';

const connectDB = async (retries = 5, delay = 3000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`\x1b[32m[MONGO_ATLAS] Connection handshake stable: ${conn.connection.host}\x1b[0m`);
      return;
    } catch (error) {
      console.error(`\x1b[31m[DATABASE_CRASH] Mongoose initialization error (Attempt ${attempt}/${retries}): ${error.message}\x1b[0m`);
      if (attempt === retries) {
        process.exit(1);
      }
      console.log(`Retrying in ${delay / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

// Add this explicit fallback line to provide the missing 'default' token
export default connectDB;