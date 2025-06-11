export function About() {
  const section = document.createElement("section");
  section.className = "about";
  section.innerHTML = `
    <h2>Our Mission</h2>
    <p>Focus on Accessibility, support and legal AID</p>
    <p>Meet our Team</p>
    <p>Stephanie Royer &nbsp;&nbsp;&nbsp; Rougens Jules &nbsp;&nbsp;&nbsp; Margarette Alceus</p>
  `;
  return section;
}
