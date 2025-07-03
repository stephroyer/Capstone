import html from "html-literal";
import Majestylogo from "url:../images/Majesty_logo.png";

export default state => html`
  <header>
    <p><img src="${Majestylogo}" alt="logo"</p>
    <h1>${state.header}</h1>
  </header>
`;
