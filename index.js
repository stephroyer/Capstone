import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import axios from "axios";
import { camelCase } from "lodash";

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

                const service = inputs.service.value;
                const date = inputs.date.value;
                const zipCode = inputs.zipcode.value;

                if (!service || !date) {
                    alert("Please select a service and a date.");
                    return;
                }

                getCitiesByZipCode(zipCode).then(city => {
                    confirmationMessage.textContent = ` Your appointment for "${service}" on ${date} has been scheduled successfully at "${city}".`;
                });

                appointmentForm.reset(); // Reset the form after submission
            });
        }

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

    return axios.get(`https://us-zipcode.api.smarty.com/lookup?key=${process.env.ZIPCODE_API_URL}&zipcode=${zipCode}`)
        .then(response => {
            return response.data[0].city_states[0].city;
        })

}

