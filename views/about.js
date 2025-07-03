import html from "html-literal";
import banner from "url:../images/banner.jpeg";

export default () => html`
  <img src="${banner}" alt="Banner Image" style="width: 30%; height: 30%;" />
  <section id="about">
    <h2>Our Mission</h2>
    <p>Focus on Accessibility, support and legal AID</p>
    <p>Meet our Team</p>
    <p>
      Stephanie Royer &nbsp;&nbsp;&nbsp; Rougens Jules &nbsp;&nbsp;&nbsp;
      Margarette Alceus
    </p>
  </section>
`;
