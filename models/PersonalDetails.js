import mongoose from "mongoose";

const PersonalDetailsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const PersonalDetails = mongoose.model(
  "PersonalDetails",
  PersonalDetailsSchema
);

export default PersonalDetails;
