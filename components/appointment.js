import html from "html-literal";

export default appointment => html`
  <section class="appointment" id="Appointment">
    <h3>${appointment.Name}</h3>
    <h4>${appointment.Date}</h4>
    <p>${appointment.Services}</p>
    <p>${appointment.Language}</p>
    <p>${appointment.Zipcode}</p>
    <button class="delete-btn" value="${appointment._id}">Delete</button>
  </section>
`;
