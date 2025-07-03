import html from "html-literal";

export default () => html`
  <section id="appointment">
    <h2>Schedule an Appointment</h2>
    <form>
      <label for="name">Enter your full name:</label>
      <input type="string" id="name" name="name" required />

      <label for="email">Enter your email address</label>
      <input type="email" id="email" name="email" required />

      <label for="service">Select Service:</label>
      <select id="service" name="service">
        <option value="tps">TPS</option>
        <option value="ead">EAD</option>
        <option value="asylum">Asylum</option>
        <option value="green-card">Green Card</option>
        <option value="citizenship">Citizenship</option>
      </select>

      <label for="date">Choose Date:</label>
      <input type="date" id="date" name="date" required />
      <label for="language">Select your language:</label>
      <select id="language" name="language">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="arabic">Arabic</option>
        <option value="chinese">Chinese</option>
      </select>
      <label for="zipcode">Zip code:</label>
      <input type="number" id="zipcode" name="zipcode" required />

      <button type="submit">Submit</button>
    </form>
    <p id="confirmation"></p>
  </section>
`;
