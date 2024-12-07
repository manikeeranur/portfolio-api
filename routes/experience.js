import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    role,
    companyName,
    start_date,
    end_date,
    technology,
    project,
    client,
    projectDescription,
  } = req.body;

  const newExperience = new Experience({
    role,
    companyName,
    start_date,
    end_date,
    technology,
    project,
    client,
    projectDescription,
  });

  try {
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const experienceList = await Experience.find();
    res.status(200).json(experienceList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    res.status(200).json(experience);
  } catch (err) {
    res.status(404).json({ message: "Experience not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Experience entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
