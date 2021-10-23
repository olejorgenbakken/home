import { NavLink } from "react-router-dom";
import { nettsider } from "../../assets/Nettsider/Nettsider";
import Lenke from "../Lenke/Lenke";

import "./BunnMeny.css";

const BunnMeny = () => {
  return (
    <footer id="global-footer" >
      <section id="global-footer-innhold">
        <article className="gap-1">
          <label>Sjekk meg ut andre steder</label>
          {
            nettsider.map((side) => (
              <Lenke href={side.href} key={side.href} tittel={`Gå til ${side.navn}`}>
                {side.navn}
              </Lenke>
            ))
          }
        </article>
      </section>
    </footer>
  )
}

export default BunnMeny;