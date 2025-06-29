import html from "html-literal";
import officeAddressBookIcon from "url:../images/office-address-book-icon.png";
import phoneIcon from "url:../images/phone-icon.png";
import serviceIcon from "url:../images/Service-icon.png";
import emailIcon from "url:../images/email-icon.png";
//import state from '../components/header';

export default state => html`
  <section id="contact">
    <h2>Contact Us</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>

    <h3>Contact Information</h3>
    <p><img src="${serviceIcon}" alt="service hours" />Mon-Fri, 9 AM - 5 PM</p>
    <p>
      <img src="${officeAddressBookIcon}" alt="me" /> 3172 Arkansas Ave Saint
      Louis MO 63118
    </p>
    <p><img src="${phoneIcon}" alt="phone" /> 314 376 8259</p>
    <p>
      <img src="${emailIcon}" alt="email" /> Contact@majestyimmigrationservices
    </p>

    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </section>
`;
