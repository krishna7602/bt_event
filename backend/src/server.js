import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import configRoutes from "./routes/configRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (_request, response) => {
  response.json({ success: true, message: "Backend is running" });
});

app.use("/api/config", configRoutes);

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ success: false, message: "Internal server error" });
});

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bt_event";

const start = async () => {
  try {
    try {
      await mongoose.connect(mongoUri);
      console.log("MongoDB connected");
    } catch (error) {
      console.warn("MongoDB unavailable, using in-memory config store.");
    }

    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start backend:", error);
    process.exit(1);
  }
};

start();