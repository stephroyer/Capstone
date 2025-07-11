import html from "html-literal";

export default appointment => html`
  <section class="appointment" id="Appointment">
    <h1>${appointment.Name}</h1>
    <h2>${appointment.Date}</h2>
    <p>${appointment.Services}</p>
    <p>${appointment.Language}</p>
    <p>${appointment.Zipcode}</p>
    <button class="delete-btn" value="${appointment._id}">Delete</button>
  </section>
`;
