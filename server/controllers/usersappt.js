import { Router } from "express";
import Appointment from "../models/userappt";

const router = Router();

// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newAppointment = new Appointment(request.body);

    const data = await newAppointment.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all appointement route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Appointment.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

// Get a single Appointment by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Appointment.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a Appointment by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Appointment.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
