import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  yearOfGraduation: { type: Number, required: true },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;
