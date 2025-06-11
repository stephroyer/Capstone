import { Header } from "./components/header.js";
import { Nav } from "./components/nav.js";
import { Main } from "./components/main.js";
import { Footer } from "./components/footer.js";
import axios from "axios";

const app = document.getElementById("app");

async function getCitiesByZipCode(zipCode) {
  const authkey= "238220540985518055";
    return axios.get(`https://us-zipcode.api.smarty.com/lookup?key=${authkey}&zipcode=${zipCode}`)
                .then(response => {
                    return response.data[0].city_states[0].city;
                })
  }

function renderApp() {
  app.innerHTML = "";
  app.appendChild(Header());
  app.appendChild(Nav());
  app.appendChild(Main());
  app.appendChild(Footer());
}

window.addEventListener("popstate", () => {
  renderApp();
});

renderApp();

document.addEventListener("DOMContentLoaded", function() {
  const appointmentForm = document.querySelector(".appointment form");
  const confirmationMessage = document.createElement("p");
  confirmationMessage.style.color = "blue";
  confirmationMessage.style.marginTop = "1rem";
  confirmationMessage.style.fontSize = "1rem";
  confirmationMessage.style.fontWeight = "bold";

  appointmentForm.parentNode.appendChild(confirmationMessage);

  appointmentForm.addEventListener("submit", function(e) {
    e.preventDefault();


    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const zipCode = document.getElementById("zipcode").value;

    if (!service || !date) {
      alert("Please select a service and a date.");
      return;
    }
    getCitiesByZipCode(zipCode).then( city => {
         confirmationMessage.textContent = ` Your appointment for "${service}" on ${date} has been scheduled successfully at "${city}".`;
    });

    
 
   
    appointmentForm.reset(); // Reset the form after submission
  });
});
