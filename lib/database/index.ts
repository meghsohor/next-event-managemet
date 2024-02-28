import mongoose from 'mongoose';
import { handleError } from '../utils';

const MONGODB_URI = process.env.MONGODB_URI;

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'next-event',
      bufferCommands: false,
    });

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    handleError(error);
  }
};
