import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  companyName: { type: String, required: true },
  technology: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: false },
  project: { type: String, required: false },
  client: { type: String, required: false },
  projectDescription: { type: Array, required: false },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience;
