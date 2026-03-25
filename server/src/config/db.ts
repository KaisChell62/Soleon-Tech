import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/soleontech');
    console.log(`[database]: MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[database]: Error: ${(error as Error).message}`);
    // Do not exit in development to allow server to start partially
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    } else {
        console.log('[database]: Running without DB connection (dev mode)');
    }
  }
};
