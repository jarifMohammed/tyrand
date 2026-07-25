
import mongoose from "mongoose";

const careerApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  linkedinUrl: {
    type: String,
  },
  portfolioUrl: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  resumePath: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CareerApplication =
  mongoose.models.CareerApplication ||
  mongoose.model("CareerApplication", careerApplicationSchema);

export default CareerApplication;
