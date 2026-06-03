import mongoose from "mongoose";
import dotenv from "dotenv";
import { defaultConfig } from "./config/defaultConfig.js";

dotenv.config();

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bt_event";

const update = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    const db = mongoose.connection.db;
    
    const result = await db.collection("siteconfigs").updateOne(
      { key: "site-config" },
      { $set: { settings: defaultConfig } },
      { upsert: true }
    );
    console.log("Updated site-config document:", result);
  } catch (error) {
    console.error("Error updating database config:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

update();
