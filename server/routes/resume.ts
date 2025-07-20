import { RequestHandler } from "express";
import path from "path";
import fs from "fs";

export const handleResumeDownload: RequestHandler = (req, res) => {
  console.log(
    "📄 Resume download requested from:",
    req.ip || req.connection.remoteAddress,
  );

  try {
    // Path to the resume file in the public directory
    const resumePath = path.join(
      process.cwd(),
      "public",
      "Resume 2025.pdf",
    );

    console.log("📂 Looking for resume at:", resumePath);

    // Check if file exists
    if (!fs.existsSync(resumePath)) {
      console.log("❌ Resume file not found at:", resumePath);
      return res.status(404).json({
        error: "Resume file not found",
        message:
          "The resume file is currently unavailable. Please contact me directly.",
      });
    }

    // Get file stats for content length
    const stat = fs.statSync(resumePath);

    // Set appropriate headers for PDF download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Resume 2025.pdf",
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Cache-Control", "no-cache");

    console.log("✅ Resume file found, initiating download");

    // Create read stream and pipe to response
    const fileStream = fs.createReadStream(resumePath);

    fileStream.on("error", (error) => {
      console.error("❌ Error reading resume file:", error);
      if (!res.headersSent) {
        res.status(500).json({
          error: "Failed to read resume file",
          message:
            "There was an error accessing the resume. Please try again later.",
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
      message: "Unable to process resume download request.",
    });
  }
};

export const handleResumeInfo: RequestHandler = (req, res) => {
  try {
    const resumePath = path.join(
      process.cwd(),
      "public",
      "Soumik_Basu_Resume.pdf",
    );
    const exists = fs.existsSync(resumePath);

    if (exists) {
      const stat = fs.statSync(resumePath);
      res.json({
        available: true,
        filename: "Soumik_Basu_Resume.pdf",
        size: stat.size,
        lastModified: stat.mtime,
        downloadUrl: "/api/resume/download",
      });
    } else {
      res.json({
        available: false,
        message: "Resume is currently being updated. Please check back soon.",
      });
    }
  } catch (error) {
    console.error("Resume info error:", error);
    res.status(500).json({
      error: "Unable to get resume information",
    });
  }
};
