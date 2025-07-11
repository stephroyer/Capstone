import html from "html-literal";

export default () => html`
  <section id="admin" class="admin">
    <div class="container">
      <h1>Administrator Panel</h1>

      <form id="admin-login-form">
        <label for="admin-username">Username:</label>
        <input type="text" id="admin-username" name="username" required />

        <label for="admin-password">Password:</label>
        <input type="password" id="admin-password" name="password" required />

        <button type="submit">Login</button>
      </form>

      <div id="admin-dashboard" class="admin-dashboard">
        <h2>Welcome, to our Admin section!</h2>
        <button id="view-appointments">View Appointments</button>
        <button id="View-contact">View Messages</button>
        <button id="admin-logout">Logout</button>

        <div id="admin-content"></div>
      </div>
    </div>
  </section>
`;
// style="display: none;
