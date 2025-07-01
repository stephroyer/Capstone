import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
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
  zipcode: {
    type: String,
    validate: /d{5}/
  }
});

const Appointment = mongoose.model("usermodelappt", AppointmentSchema);

export default Appointment;
