import { RequestHandler } from "express";
import mongoose, { Schema, model } from "mongoose";

// Define the contact message schema
const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.models.ContactMessage || model("ContactMessage", contactSchema);

// POST /api/contact - Submit a new contact message
export const handleContactSubmit: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    
    if (name.trim().length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters long." });
    }
    
    if (message.trim().length < 10) {
      return res.status(400).json({ error: "Message must be at least 10 characters long." });
    }
    
    // Basic email validation
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

// GET /api/contact - Get all contact messages (for admin purposes)
export const getContactMessages: RequestHandler = async (req, res) => {
  try {
    const messages = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .limit(100); // Limit to prevent overwhelming response
    
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