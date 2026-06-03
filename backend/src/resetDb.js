import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bt_event";

const reset = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    const db = mongoose.connection.db;
    
    // The collection name in Mongoose defaults to lowercase plural, which is "siteconfigs"
    const collections = await db.listCollections({ name: "siteconfigs" }).toArray();
    if (collections.length > 0) {
      const result = await db.collection("siteconfigs").deleteOne({ key: "site-config" });
      console.log("Deleted site-config document:", result);
    } else {
      console.log("Collection siteconfigs does not exist or has no documents.");
    }
  } catch (error) {
    console.error("Error resetting database config:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

reset();
