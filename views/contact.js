export function Contact() {
  const section = document.createElement("section");
  section.className = "contact";
  section.innerHTML = `
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
    <p>Office Hours: Mon-Fri, 9 AM - 5 PM</p>
    <p>Address: 3172 Arkansas Ave Saint Louis MO 63118</p>
    <p>Phone: 314 376 8259</p>
    <p>Email: Contact@majestyimmigrationservices</p>
  `;
  return section;
}
