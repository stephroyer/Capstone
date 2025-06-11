export function Nav() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div class="logo"><img src="Majesty logo.png" alt="Majesty immigration services"></div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#appointment">Schedule Appointment</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  `;

  nav.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      history.pushState({}, "", e.target.getAttribute("href"));
      window.dispatchEvent(new Event("popstate"));
    }
  });

  return nav;
}
