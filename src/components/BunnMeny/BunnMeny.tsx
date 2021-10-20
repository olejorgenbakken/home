import { nettsider } from "../../assets/Nettsider/Nettsider";
import Lenke from "../Lenke/Lenke";

import "./BunnMeny.css";


const setWebpages = () => {
  const externalList = nettsider.map((side) => (
    <a href={side.href}>
      <img src={side.logo} alt={side.navn} />
    </a>
  ));
  return (externalList);
}

const BunnMeny = () => {
  return (
    <footer id="global-footer" >
      <section className="global-footer-content gap-2">
        <p>
          Takk for at du sjekket ut nettsiden min. &nbsp;
          <Lenke href="https://github.com/olejorgenbakken/home">Du kan se kildekoden på GitHub her.</Lenke>
        </p>
        <article className="external-pages">
          {setWebpages()}
        </article>
      </section>
    </footer>
  )
}

export default BunnMeny;