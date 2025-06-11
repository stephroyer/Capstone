export function Services() {
  const section = document.createElement("section");
  section.className = "services";
  section.innerHTML = `
    <h2>Our Services</h2>
    <ul>
      <li>TPS (Temporary Protected Status)</li>
      <li>EAD (Employment Authorization Document)</li>
      <li>Asylum Applications</li>
      <li>Green Card Applications</li>
      <li>Citizenship Support</li>
    </ul>
  `;
  return section;
}
