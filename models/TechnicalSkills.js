import mongoose from "mongoose";

const TechnicalSkillsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const TechnicalSkills = mongoose.model(
  "TechnicalSkills",
  TechnicalSkillsSchema
);

export default TechnicalSkills;
