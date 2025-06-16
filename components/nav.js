import html from "html-literal";
// Example of using a component inside another component
import navItem from "./navItem.js";

export default navItems => {
  return html`
    <nav>
      <id class="menu"></id>
      <ul class="nav-links">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};

// export function Nav() {
//   const nav = document.createElement("nav");
//   nav.innerHTML = `
//     <div class="logo"><img src="Majesty logo.png" alt="Majesty immigration services"></div>
//     <ul class="nav-links">
//       <li><a href="#home">Home</a></li>
//       <li><a href="#about">About Us</a></li>
//       <li><a href="#services">Services</a></li>
//       <li><a href="#appointment">Schedule Appointment</a></li>
//       <li><a href="#contact">Contact Us</a></li>
//     </ul>
//   `;

//   nav.addEventListener("click", e => {
//     if (e.target.tagName === "A") {
//       e.preventDefault();
//       history.pushState({}, "", e.target.getAttribute("href"));
//       window.dispatchEvent(new Event("popstate"));
//     }
//   });

//   return nav;
// }
