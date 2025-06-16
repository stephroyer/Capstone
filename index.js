import { header, nav, main, footer} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import axios from "axios";
import { camelCase } from "lodash";

const router = new Navigo("/");

function render (state = store.home) {
  console.log("Render function", state);
  document.querySelector("#app").innerHTML=`
        ${header(state)}
        ${nav(store.links)}
        ${main(state)}
        ${footer()}
        `;
        router.updatePageLinks();
}

router.hooks({
  before: (done, match) => {
    switch(match.data?.view) {
      case 'appointment':
          document.addEventListener("DOMContentLoaded", function() {
          const appointmentForm = document.querySelector("#appointment form");
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
        done();
        break;
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
    router.updatePageLinks();
    // add menu toggle to bars icon in nav bar
    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
});

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


async function getCitiesByZipCode(zipCode) {
  const authkey= "238220540985518055";
    return axios.get(`https://us-zipcode.api.smarty.com/lookup?key=${authkey}&zipcode=${zipCode}`)
                .then(response => {
                    return response.data[0].city_states[0].city;
                })
  }























// const app = document.getElementById("app");

// async function getCitiesByZipCode(zipCode) {
//   const authkey= "238220540985518055";
//     return axios.get(`https://us-zipcode.api.smarty.com/lookup?key=${authkey}&zipcode=${zipCode}`)
//                 .then(response => {
//                     return response.data[0].city_states[0].city;
//                 })
//   }

// function renderApp() {
//   app.innerHTML = "";
//   app.appendChild(Header());
//   app.appendChild(Nav());
//   app.appendChild(Main());
//   app.appendChild(Footer());
// }

// window.addEventListener("popstate", () => {
//   renderApp();
// });

// renderApp();

// document.addEventListener("DOMContentLoaded", function() {
//   const appointmentForm = document.querySelector(".appointment form");
//   const confirmationMessage = document.createElement("p");
//   confirmationMessage.style.color = "blue";
//   confirmationMessage.style.marginTop = "1rem";
//   confirmationMessage.style.fontSize = "1rem";
//   confirmationMessage.style.fontWeight = "bold";

//   appointmentForm.parentNode.appendChild(confirmationMessage);

//   appointmentForm.addEventListener("submit", function(e) {
//     e.preventDefault();


//     const service = document.getElementById("service").value;
//     const date = document.getElementById("date").value;
//     const zipCode = document.getElementById("zipcode").value;

//     if (!service || !date) {
//       alert("Please select a service and a date.");
//       return;
//     }
//     getCitiesByZipCode(zipCode).then( city => {
//          confirmationMessage.textContent = ` Your appointment for "${service}" on ${date} has been scheduled successfully at "${city}".`;
//     });




//     appointmentForm.reset(); // Reset the form after submission
//   });
// });
