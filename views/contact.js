import html from "html-literal";
import officeAddressBookIcon from "url:../images/office-address-book-icon.png";
import phoneIcon from "url:../images/phone-icon.png";
import serviceIcon from "url:../images/Service-icon.png";
import emailIcon from "url:../images/email-icon.png";
//import state from '../components/header';

export default state => html`
  <section class="contact" id="ContactForm">
    <h1>Contact Us</h1>

    <p>
      If you have any questions or need assistance, we’d love to hear from you.
      Fill out the form below or reach us through the provided contact details.
    </p>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    <p id="confirmationContact"></p>
    <div class="contact-info">
      <h2>Contact Information</h2>

      <p>
        <img src="${serviceIcon}" alt="service hours" />Mon-Fri, 9 AM - 5 PM
      </p>
      <p>
        <img src="${officeAddressBookIcon}" alt="me" /> 3172 Arkansas Ave Saint
        Louis MO 63118
      </p>

      <p>
        <img src="${phoneIcon}" alt="Phone Icon" />
        <a href="tel:3143455709">314 345 5709</a>
      </p>
      <p>
        <img src="${emailIcon}" alt="Email Icon" />
        <a href="mailto:Contact@majestyimmigrationservices"
          >Contact@majestyimmigrationservices</a
        >
      </p>
    </div>
    <p id="confirmationContact"></p>

    <h2>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h2>
  </section>
`;
