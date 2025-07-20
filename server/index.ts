import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleResumeDownload, handleResumeInfo } from "./routes/resume";
import { handleContactSubmit, getContactMessages } from "./routes/contact";
import mongoose from "mongoose";

export function createServer() {
  // Connect to MongoDB
  const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
  mongoose.connect(mongoUri, { dbName: "portfolio" })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);
  app.get("/api/resume/download", handleResumeDownload);
  app.get("/api/resume/info", handleResumeInfo);
  app.post("/api/contact", handleContactSubmit);
  app.get("/api/contact", getContactMessages);

  return app;
}
