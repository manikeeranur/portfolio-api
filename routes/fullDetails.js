import express from "express";
import getFullDetails from "../models/FullDetails.js";

const router = express.Router();

// Define the Route
router.get("/", async (req, res) => {
  try {
    const mergedData = await getFullDetails();
    res.json(mergedData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch or merge data" });
  }
});

export default router;
