import express from "express";
import TechnicalSkills from "../models/TechnicalSkills.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, value } = req.body;

  const newTechnicalSkills = new TechnicalSkills({
    title,
    value,
  });

  try {
    const savedTechnicalSkills = await newTechnicalSkills.save();
    res.status(201).json(savedTechnicalSkills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const technicalSkillsList = await TechnicalSkills.find();
    res.status(200).json(technicalSkillsList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const technicalSkills = await TechnicalSkills.findById(req.params.id);
    res.status(200).json(technicalSkills);
  } catch (err) {
    res.status(404).json({ message: "TechnicalSkills not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTechnicalSkills = await TechnicalSkills.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTechnicalSkills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await TechnicalSkills.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "TechnicalSkills entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
