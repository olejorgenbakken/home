import Lenke from "../Lenke/Lenke";

import webpages from "../../assets/data/nettsider";

import "./BunnMeny.css";


const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <a href={page.href}>
      <img src={page.logo} alt={page.title} />
    </a>
  ));
  return (externalList);
}

const BunnMeny = () => {
  return (
    <footer id="global-footer" >
      <section className="global-footer-content flex-column gap-2">
        <p>
          Takk for at du sjekket ut nettsiden min. &nbsp;
          <Lenke href="https://github.com/olejorgenbakken/home">Du kan se kildekoden på GitHub her.</Lenke>
        </p>
        <section className="external-pages">
          {setWebpages()}
        </section>
      </section>
    </footer>
  )
}

export default BunnMeny;