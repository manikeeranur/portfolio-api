import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startYear: { type: Number, required: true },
  endYear: { type: Number },
  description: { type: String },
});

const Experience = mongoose.model("Experience", ExperienceSchema);

export default Experience;
