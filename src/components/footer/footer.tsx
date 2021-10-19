import InlineLink from "../inlineLink/inlineLink";

import webpages from "../../assets/data/webpages";

import "./footer.css";


const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <a href={page.href}>
      <img src={page.logo} alt={page.title} />
    </a>
  ));
  return (externalList);
}

const Footer = () => {
  return (
    <footer id="global-footer" >
      <section className="global-footer-content flex-column gap-2 constrain padding">
        <p>
          Takk for at du sjekket ut nettsiden min. &nbsp;
          <InlineLink href="https://github.com/olejorgenbakken/home">Du kan se kildekoden på GitHub her.</InlineLink>
        </p>
        <section className="external-pages">
          {setWebpages()}
        </section>
      </section>
    </footer>
  )
}

export default Footer;