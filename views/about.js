import html from "html-literal";
import banner from "url:../images/banner.jpeg";

export default () => html`
  <section class="About" id="about">
    <img src="${banner}" alt="Banner Image" style="width: 30%; height: 30%;" />
    <h1>Our Mission</h1>
    <p>
      We believe in dignity, equity, and opportunity for every immigrant. Our
      mission is to provide accessible, transparent, and trustworthy immigration
      support to those seeking safety, stability, and a better future in the
      United States.
    </p>
    <p>Focus on Accessibility, support and legal AID</p>
    <h1>Our team</h1>
    <p>
      Our team is made up of experienced immigration specialists, multilingual
      advocates, and compassionate professionals dedicated to helping people
      from all walks of life. We’ve supported hundreds of families and
      individuals through complex immigration processes.
    </p>

    <p>Meet our Team</p>
    <p>
      Stephanie Royer &nbsp;&nbsp;&nbsp; Rougens Jules &nbsp;&nbsp;&nbsp;
      Margarette Alceus
    </p>
  </section>
`;
