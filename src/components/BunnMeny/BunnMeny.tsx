import { nettsider } from "../../assets/Nettsider/Nettsider";
import Lenke from "../Lenke/Lenke";

import "./BunnMeny.css";

const BunnMeny = () => {
  return (
    <footer id="global-footer" >
      <section className="global-footer-innhold gap-2">
        <p>
          Takk for at du sjekket ut nettsiden min.&nbsp;
          <Lenke href="https://github.com/olejorgenbakken/home">Kildekoden er tilgjengelig på GitHub.</Lenke>
        </p>
        <section className="eksterne-sider">
          {
            nettsider.map((side) => (
              <a href={side.href} key={side.href}>
                <img src={side.logo} alt={side.navn} />
              </a>
            ))
          }
        </section>
      </section>
    </footer>
  )
}

export default BunnMeny;