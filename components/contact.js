import html from "html-literal";

export default contact => html`
  <section class="contact" id="Contact">
    <h3>${contact.NameUser}</h3>
    <p>${contact.EmailUser}</p>
    <p>${contact.MessageUser}</p>
    <button class="delete-btn" value="${contact._id}">Delete</button>
  </section>
`;
