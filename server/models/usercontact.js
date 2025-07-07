import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  NameUser: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  EmailUser: {
    type: String,
    required: true,
    validate: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  MessageUser: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Contact = mongoose.model("usermodelcontact", contactSchema);

export default Contact;
