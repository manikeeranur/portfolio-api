import express from "express";
import PersonalDetails from "../models/PersonalDetails.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, value } = req.body;

  const newPersonalDetails = new PersonalDetails({
    title,
    value,
  });

  try {
    const savedPersonalDetails = await newPersonalDetails.save();
    res.status(201).json(savedPersonalDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const PersonalDetailsList = await PersonalDetails.find();
    res.status(200).json(PersonalDetailsList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const PersonalDetails = await PersonalDetails.findById(req.params.id);
    res.status(200).json(PersonalDetails);
  } catch (err) {
    res.status(404).json({ message: "PersonalDetails not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPersonalDetails = await PersonalDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPersonalDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await PersonalDetails.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "PersonalDetails entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
