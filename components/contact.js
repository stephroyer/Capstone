import html from "html-literal";

export default contact => html`
  <section class="contact" id="Contact">
    <h1>${contact.NameUser}</h1>
    <p>${contact.EmailUser}</p>
    <p>${contact.MessageUser}</p>
    <button class="delete-btn" value="${contact._id}">Delete</button>
  </section>
`;
