import e from "express";
import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  Email: {
    type: String,
    required: true,
    validate: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  Date: {
    type: Date,
    required: true
  },
  Services: {
    type: String,
    required: true,
    enum: ["tps", "ead", "asylum", "green-card", "citizenship"],
    default: "tps"
  },
  Language: {
    type: String,
    required: true,
    enum: ["english", "spanish", "french", "arabic", "chinese"],
    default: "english"
  },

  Zipcode: {
    type: String,
    validate: /^[\d]{5}$/
  }
});

const Appointment = mongoose.model("usermodelappt", AppointmentSchema);

export default Appointment;
