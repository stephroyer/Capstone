// import emailjs from "@emailjs/nodejs";

// export default function sendEmail(email) {
//   const templateParams = {
//     name: "James",
//     title: "Check this out!",
//     message: "This is a test message",
//     email: email
//   };

//   emailjs
//     .send("service_jxkehml", "template_3363wyo", templateParams, {
//       publicKey: "BSd-2yuE8JiuH2FPv",
//       privateKey: "x_avT3H33jST2k-hNlvip" // optional, highly recommended for security reasons
//     })
//     .then(
//       response => {
//         console.log("SUCCESS!", response.status, response.text);
//       },
//       err => {
//         console.log("FAILED...", err);
//       }
//     );
// }
