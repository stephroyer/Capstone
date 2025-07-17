import html from "html-literal";
import Majestylogo from "url:../images/Majesty_logo.png";

export default state => html`
  <header>
    <img src="${Majestylogo}" alt="logo" class="logo" />
    <h1>${state.header}</h1>
  </header>
`;
