import { header, nav, main, footer, appointment, appointmentList, contact, contactList } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import axios from "axios";
import { camelCase } from "lodash";
import emailjs from "@emailjs/browser";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

// import nodemailer from "nodemailer";
const API_URL_APPOINTMENTS = `${API_BASE_URL}/appointments`;
const API_URL_CONTACT = `${API_BASE_URL}/Contact`;
const router = new Navigo("/");

function render(state = store.home) {
    document.querySelector("#app").innerHTML = `
        ${header(state)}
        ${nav(store.links)}
        ${main(state)}
        ${footer()}
        `;
    router.updatePageLinks();
}

router.hooks({
    before: (done, match) => {
        const view = match?.data?.view ? camelCase(match.data.view) : "home";
        console.info("Before hook executing");
        switch (view) {


            case "contact":
                axios
                // Get request to retrieve the current weather data using the API key and providing a city name
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
                    )
                    .then(response => {
                      console.log("Weather data retrieved successfully",response);
                        // Create an object to be stored in the Home state from the response
                        store.contact.weather = {
                            city: response.data.name,
                            temp: response.data.main.temp,
                            feelsLike: response.data.main.feels_like,
                            description: response.data.weather[0].main
                        };
                        done();
                    })
                    .catch((err) => {
                        console.log(err);
                        done();
                    });
            default:
                done();
        }
    },
    already: (match) => {
        const view = match?.data?.view ? camelCase(match.data.view) : "home";
        console.log("redenring view", view);
        render(store[view]);
    },
    after: (match) => {
        console.info("After hook executing");
        const view = match?.data?.view ? camelCase(match.data.view) : "home";

        if (view === "appointment") {
            const appointmentForm = document.querySelector("#appointment form")
            appointmentForm.addEventListener("submit", function(event) {
                const confirmationMessage = document.getElementById("confirmation");
                event.preventDefault();

                const inputs = event.target.elements;

                const name = inputs.name.value;
                const email = inputs.email.value;
                const service = inputs.service.value;
                const date = inputs.date.value;
                const language = inputs.language.value;
                const zipCode = inputs.zipcode.value;

                if (!service || !date || !zipCode || !name || !email || !language) {
                    alert("Please fill out all fields.");
                    return;
                }

                saveAppointment({
                    name: name,
                    email: email,
                    services: service,
                    date: date,
                    language: language,
                    zipCode: zipCode

                });

                sendEmailApt(email,name);

                   getCitiesByZipCode(zipCode).then(city => {
                    confirmationMessage.textContent = `hello "${name}" thank you for trust us!!! Your appointment for "${service}" on ${date} has been scheduled successfully at "${city}".`;
                }).catch(err => {
                   confirmationMessage.textContent = `hello "${name}" thank you for trust us!!! Your appointment for "${service}" on ${date} has been scheduled successfully.`;
                });
                appointmentForm.reset(); // Reset the form after submission
            });
        }

        if (view === "contact") {
        // add event listener to contact form
        const contactForm = document.querySelector("#ContactForm form");
        contactForm.addEventListener("submit", function(event) {
                const confirmationMessage = document.getElementById("confirmationContact");
                event.preventDefault();

                const inputs = event.target.elements;

                const name = inputs.name.value;
                const email = inputs.email.value;
                const message = inputs.message.value;

                if (!name || !email || !message) {
                    alert("Please fill out all fields.");
                    return;
                }
                confirmationMessage.textContent = `Thank you for your message, ${name}. We will get back to you at ${email} soon.`;

                    contactForm.reset(); // Reset the form after submission

                saveContact({
                    NameUser: name,
                    EmailUser: email,
                    MessageUser: message
                });
                 sendEmailcont(name,email);

            });
            }
            if (view === "admin") {

            function renderAdminView() {
              //const adminSection = document.getElementById("admin");
              const loginForm = document.getElementById("admin-login-form");
              const dashboard = document.getElementById("admin-dashboard");
              const contentArea = document.getElementById("admin-content");
              const logoutBtn = document.getElementById("admin-logout");

              // If already logged in, show dashboard
              const isAdmin = sessionStorage.getItem("isAdmin");
              if (isAdmin === "true") {
                loginForm.style.display = "none";
                dashboard.style.display = "block";
              }

              loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const username = loginForm.username.value;
                const password = loginForm.password.value;

                // Replace with real auth in production
                if (username === "admin" && password === "Majesty@2025") {
                  sessionStorage.setItem("isAdmin", "true");
                  loginForm.style.display = "none";
                  dashboard.style.display = "block";
                } else {
                  alert("Invalid login.");
                }
              });

              logoutBtn.addEventListener("click", () => {
                sessionStorage.removeItem("isAdmin");
                dashboard.style.display = "none";
                loginForm.style.display = "block";
              });

              document.getElementById("view-appointments").addEventListener("click", () => {
                // Replace with real fetch logic
                contentArea.innerHTML = `<p>Appointments loaded (example data).</p>`;
                getAppointment().then(appointments =>{
                 contentArea.innerHTML = appointmentList( appointments.map(appointment).join(""));
                  deleteAppointment();
                }).catch(err => {
                  console.error("Error fetching appointments:", err);
                  contentArea.innerHTML = `<p>Error loading appointments.</p>`;
                });
              });

              document.getElementById("View-contact").addEventListener("click", () => {
                 contentArea.innerHTML = `<p>Messages loaded (example data).</p>`;
                getContact().then(contacts => {
                  contentArea.innerHTML = contactList(contacts.map(contact).join(""));
                  deletecontact();
                });
            }
          );
        }
                renderAdminView();

      }
            router.updatePageLinks();
            // add menu toggle to bars icon in nav bar
            document.querySelector(".menu").addEventListener("click", () => {
                document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
    }
});



async function getCitiesByZipCode(zipCode) {

    return axios.get(`https://us-zipcode.api.smarty.com/lookup?key=${process.env.ZIPCODE_API_URL}&zipcode=${zipCode}`)
        .then(response => {
            return response.data[0].city_states[0].city;
        })



}


function sendEmailApt(email,name ) {
  const templateParams = {
    name: name,
    title: "Appointment Confirmation",
    message: "Thank you for scheduling an appointment with us. We will contact you soon.",
    email: email
  };

  emailjs
    .send("service_jxkehml", "template_3363wyo", templateParams, {
      publicKey: `${process.env.PUBLIC_KEY_SENDEMAIL}`,

    })
    .then(
      response => {
        console.log("SUCCESS!", response.status, response.text);
      },
      err => {
        console.log("FAILED...", err);
      }
    );


}

function sendEmailcont(name, email) {
  const templateParams2 = {
    NameUser : name,
    title: "Message Confirmation",
    MessageUser: "Thank you for contacting us.",
    email: email
  };

  emailjs
    .send("service_jxkehml", "template_nxcnrnj", templateParams2, {
      publicKey: `${process.env.PUBLIC_KEY_SENDEMAIL}`,

    })
    .then(
      response => {
        console.log("SUCCESS!", response.status, response.text);
      },
      err => {
        console.log("FAILED...", err);
      }
    );
}


async function saveContact(formData) {
    axios.post(`${API_URL_CONTACT}`, {

      NameUser: formData.NameUser,
      EmailUser: formData.EmailUser,
      MessageUser: formData.MessageUser,
    } ).then(response => {

     console.log("Contact saved successfully", response.data);
      if (response.statusText === 'Ok') {
        // You can add any logic here if needed when status is 'Ok'
      }
    });
}

async function saveAppointment(formData) {
    axios.post(`${API_URL_APPOINTMENTS}`, {

      Name: formData.name,
      Email: formData.email,
      Date: formData.date,
      Zipcode: formData.zipCode,
      Language: formData.language,
      Services: formData.services,
  } ).then(response => {
     console.log("Appointment saved successfully", response.data);
      if (response.statusText === 'Ok') {
        // You can add any logic here if needed when status is 'Ok'
      }
    });
}
async function getAppointment() {
    return axios.get(`${API_URL_APPOINTMENTS}`)
        .then(response => {
            console.log("Appointment retrieved successfully", response.data);
            return response.data;
})}

async function getContact() {
    return axios.get(`${API_URL_CONTACT}`)
        .then(response => {
            console.log("Appointment retrieved successfully", response.data);
            return response.data;
})}

// Delete appointment from backend
function deleteAppointment() {
  const buttons = document.querySelectorAll(".delete-btn");
  buttons.forEach(button => {
    button.addEventListener("click", async () => {
      const id = button.value;
      console.log("Delete button clicked for appointment ID:", button);
      if (confirm("Are you sure you want to delete this appointment?")) {
        try {
          const res = await fetch(`${API_URL_APPOINTMENTS}/${id}`, { method: "DELETE" });
          if (res.ok) {
            getAppointment();
          } else {
            alert("Failed to delete appointment.");
          }
        } catch (err) {
          console.error("Error deleting:", err);
        }
      }
    });
  });
}
// Delete contactMessage from backend
function deletecontact() {
  const buttons = document.querySelectorAll(".delete-btn");
  buttons.forEach(button => {
    button.addEventListener("click", async () => {
      const id = button.value;
      console.log("Delete button clicked for appointment ID:", button);
      if (confirm("Are you sure you want to delete this appointment?")) {
        try {
          const res = await fetch(`${API_URL_CONTACT}/${id}`, { method: "DELETE" });
          if (res.ok) {
            getContact();
          } else {
            alert("Failed to delete appointment.");
          }
        } catch (err) {
          console.error("Error deleting:", err);
        }
      }
    });
  });
}

  router.on({
            "/": () => render(),
        // The :view slot will match any single URL segment that appears directly after the domain name and a slash
        '/:view': function(match) {
            console.info("Route handler executing");
            // If URL is '/about-me':
            // match.data.view will be 'about-me'
            // Using Lodash's camelCase to convert kebab-case to camelCase:
            // 'about-me' becomes 'aboutMe'
            const view = match?.data?.view ? camelCase(match.data.view) : "home";

            // If the store import/object has a key named after the view
            if (view in store) {
                // Then the invoke the render function using the view state, using the view name
                render(store[view]);
            } else {
                // If the store
                render(store.viewNotFound);
                console.log(`View ${view} not defined`);
            }
        }
}).resolve();


