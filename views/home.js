export function Home() {
  const section = document.createElement("section");
  section.className = "hero";
  section.innerHTML = `
    <h1>Welcome to Majesty Immigration Services</h1>
    <p>Your trusted partner in immigration support and guidance.</p>
    <p>TPS, EAD, ASYLUM, ETC...</p>
  `;
  return section;
}
