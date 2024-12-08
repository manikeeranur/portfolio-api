import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
  image: { type: String, required: true },
  text: { type: String, required: true },
});

const Skills = mongoose.model("Skills", SkillsSchema);

export default Skills;
