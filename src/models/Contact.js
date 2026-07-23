
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactReasons: [String],
  budget: Number,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
