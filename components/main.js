import { Home } from "../views/home.js";
import { About } from "../views/about.js";
import { Services } from "../views/services.js";
import { Appointment } from "../views/appointment.js";
import { Contact } from "../views/contact.js";

export function Main() {
  const main = document.createElement("main");
  const hash = location.hash || "#home";

  switch (hash) {
    case "#about":
      main.appendChild(About());
      break;
    case "#services":
      main.appendChild(Services());
      break;
    case "#appointment":
      main.appendChild(Appointment());
      break;
    case "#contact":
      main.appendChild(Contact());
      break;
    case "#home":
    default:
      main.appendChild(Home());
      break;
  }

  return main;
}
