import mongoose from "mongoose";

/** * Global variable to cache the connection across hot-reloads in development.
 * This prevents creating multiple connections during development.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Production-e commands queue kora bhalo noy
      maxPoolSize: 10, // Ekshathe koita connection khola thakbe
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New Database Connection Established");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", e);
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
