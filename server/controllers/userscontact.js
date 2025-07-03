// import { Router } from "express";
// import Contact from "../models/usercontact.js";
// import Contact from '../models/usercontact';

// const router = Router();

// // Create pizza route
// router.post("/", async (request, response) => {
//   try {
//     const newContact = new Contact(request.body);

//     const data = await newContact.save();

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     if ("name" in error && error.name === "ValidationError")
//       return response.status(400).json(error.errors);

//     return response.status(500).json(error.errors);
//   }
// });

// // Get all contact messages route
// router.get("/", async (request, response) => {
//   try {
//     // Store the query params into a JavaScript Object
//     const query = request.query; // Defaults to an empty object {}

//     const data = await Contact.find(query);

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);
//     return response.status(500).json(error.errors);
//   }
// });

// // Get a single Appointment by ID
// router.get("/:id", async (request, response) => {
//   try {
//     const data = await Contact.findById(request.params.id);

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });

// // Delete a Appointment by ID
// router.delete("/:id", async (request, response) => {
//   try {
//     const data = await Contact.findByIdAndDelete(request.params.id);

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });

// // Update a Appointment by ID
// router.put("/:id", async (request, response) => {
//   try {
//     const body = request.body;

//     const data = await Contact.findByIdAndUpdate(
//       request.params.id,
//       {
//         $set: {
//           name: body.name,
//           email: body.email,
//           message: body.message,

//         }
//       },
//       {
//         new: true,
//         runValidators: true
//       }
//     );

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     if ("name" in error && error.name === "ValidationError")
//       return response.status(400).json(error.errors);

//     return response.status(500).json(error.errors);
//   }
// });

// export default router;
