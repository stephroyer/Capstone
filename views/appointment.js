export function Appointment() {
  const section = document.createElement("section");
  section.className = "appointment";
  section.innerHTML = `
    <h2>Schedule an Appointment</h2>
    <form>

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

      <label for="zipcode">Zip code:</label>
      <input type="text" id="zipcode" name="zipcode" required />


      <button type="submit">Submit</button>
    </form>
  `;
  return section;
}
