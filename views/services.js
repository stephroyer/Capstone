import html from "html-literal";

export default state => html`
  <section "class=service" id="services">
    <h1>Our Services</h1>

    <h2>Temporary Protected Status (TPS)</h2>
    <p>
      We help you determine your eligibility for TPS and guide you through the
      application or renewal process.
    </p>
    <ul>
      <li>
        <strong>Eligibility:</strong> Must be from a designated country affected
        by conflict or disaster
      </li>
      <li>
        <strong>Documents:</strong> Proof of nationality, continuous presence in
        the U.S., identity documents
      </li>
    </ul>

    <h2>Employment Authorization Document (EAD)</h2>
    <p>
      We assist with new applications and renewals so you can legally work in
      the U.S.
    </p>
    <ul>
      <li>
        <strong>Eligibility:</strong> Varies based on your immigration status
        (TPS, asylum, etc.)
      </li>
      <li>
        <strong>Documents:</strong> Prior EAD (if applicable), I-765 form,
        eligibility proof
      </li>
    </ul>

    <h2>Asylum Support</h2>
    <p>
      From filing your asylum claim to interview preparation, our experts ensure
      you're not alone during the process.
    </p>
    <ul>
      <li>
        <strong>Eligibility:</strong> You must fear persecution in your home
        country based on race, religion, nationality, political opinion, or
        social group
      </li>
      <li>
        <strong>Documents:</strong> Personal statement, supporting evidence, ID
      </li>
    </ul>

    <h2>Green Card / Adjustment of Status</h2>
    <p>
      We offer guidance on family-based or humanitarian green card applications
      and help you adjust your immigration status.
    </p>
    <ul>
      <li>
        <strong>Eligibility:</strong> Based on family, employment, or special
        programs
      </li>
      <li>
        <strong>Documents:</strong> Varies depending on case (birth
        certificates, marriage license, I-485, etc.)
      </li>
    </ul>
  </section>
`;
