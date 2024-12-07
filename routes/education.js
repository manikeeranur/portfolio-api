import express from "express";
import Education from "../models/Education.js";

const router = express.Router();

// Create a new education entry
router.post("/", async (req, res) => {
  const { degree, institute, year, percentage } = req.body;

  const newEducation = new Education({ degree, institute, year, percentage });

  try {
    const savedEducation = await newEducation.save();
    res.status(201).json(savedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all education entries
router.get("/", async (req, res) => {
  try {
    const educationList = await Education.find();
    res.status(200).json(educationList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get one education entry
router.get("/:id", async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    res.status(200).json(education);
  } catch (err) {
    res.status(404).json({ message: "Education not found" });
  }
});

// Update an education entry
router.put("/:id", async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an education entry
router.delete("/:id", async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Education entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
