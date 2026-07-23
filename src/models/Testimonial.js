
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  productBuilt: {
    type: String,
    required: true,
  },
  socialMediaHandle: String,
  description: {
    type: String,
    required: true,
  },
  image: String,
  approved: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
