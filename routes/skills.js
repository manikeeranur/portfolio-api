import express from "express";
import Skills from "../models/Skills.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { image, text } = req.body;

  const newSkills = new Skills({
    image,
    text,
  });

  try {
    const savedSkills = await newSkills.save();
    res.status(201).json(savedSkills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const SkillsList = await Skills.find();
    res.status(200).json(SkillsList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Skills = await Skills.findById(req.params.id);
    res.status(200).json(Skills);
  } catch (err) {
    res.status(404).json({ message: "Skills not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSkills = await Skills.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSkills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Skills.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Skills entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
