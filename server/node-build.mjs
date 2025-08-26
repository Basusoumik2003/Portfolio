import path from "path";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import fs from "fs";
import mongoose, { Schema, model } from "mongoose";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const handleResumeDownload = (req, res) => {
  console.log(
    "📄 Resume download requested from:",
    req.ip || req.connection.remoteAddress
  );
  try {
    const resumePath = path.join(
      process.cwd(),
      "public",
      "Resume 2025.pdf"
    );
    console.log("📂 Looking for resume at:", resumePath);
    if (!fs.existsSync(resumePath)) {
      console.log("❌ Resume file not found at:", resumePath);
      return res.status(404).json({
        error: "Resume file not found",
        message: "The resume file is currently unavailable. Please contact me directly."
      });
    }
    const stat = fs.statSync(resumePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Resume 2025.pdf"
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Cache-Control", "no-cache");
    console.log("✅ Resume file found, initiating download");
    const fileStream = fs.createReadStream(resumePath);
    fileStream.on("error", (error) => {
      console.error("❌ Error reading resume file:", error);
      if (!res.headersSent) {
        res.status(500).json({
          error: "Failed to read resume file",
          message: "There was an error accessing the resume. Please try again later."
        });
      }
    });
    fileStream.on("end", () => {
      console.log("✅ Resume download completed successfully");
    });
    fileStream.pipe(res);
  } catch (error) {
    console.error("Resume download error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Unable to process resume download request."
    });
  }
};
const handleResumeInfo = (req, res) => {
  try {
    const resumePath = path.join(
      process.cwd(),
      "public",
      "Soumik_Basu_Resume.pdf"
    );
    const exists = fs.existsSync(resumePath);
    if (exists) {
      const stat = fs.statSync(resumePath);
      res.json({
        available: true,
        filename: "Soumik_Basu_Resume.pdf",
        size: stat.size,
        lastModified: stat.mtime,
        downloadUrl: "/api/resume/download"
      });
    } else {
      res.json({
        available: false,
        message: "Resume is currently being updated. Please check back soon."
      });
    }
  } catch (error) {
    console.error("Resume info error:", error);
    res.status(500).json({
      error: "Unable to get resume information"
    });
  }
};
const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const ContactMessage = mongoose.models.ContactMessage || model("ContactMessage", contactSchema);
const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (name.trim().length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters long." });
    }
    if (message.trim().length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters long." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }
    const newMessage = new ContactMessage({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
};
const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(100);
    res.status(200).json({
      success: true,
      messages,
      count: messages.length
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ error: "Failed to fetch messages." });
  }
};
function createServer() {
  const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
  mongoose.connect(mongoUri, { dbName: "portfolio" }).then(() => console.log("✅ Connected to MongoDB")).catch((err) => console.error("❌ MongoDB connection error:", err));
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });
  app2.get("/api/demo", handleDemo);
  app2.get("/api/resume/download", handleResumeDownload);
  app2.get("/api/resume/info", handleResumeInfo);
  app2.post("/api/contact", handleContactSubmit);
  app2.get("/api/contact", getContactMessages);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
