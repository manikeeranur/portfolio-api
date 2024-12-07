import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import educationRoutes from "./routes/education.js";
import experienceRoutes from "./routes/experience.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);

console.log("process.env.MONGO_URI", process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on mmport ${PORT}`));
  })
  .catch((err) => console.error(err));
