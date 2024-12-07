import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institute: { type: String, required: true },
  year: { type: Number, required: true },
  percentage: { type: String, required: true },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;
