import { NavLink } from "react-router-dom";
import "./ToppMeny.css";

const ToppMeny = () => {
  return (
    <header>
      <nav id="global-navigasjon">
        <NavLink activeClassName="active" to="/om-meg">Om meg</NavLink>
        <NavLink to="/" exact activeClassName="active" className="home">Hjem</NavLink>
        <NavLink activeClassName="active" to="/prosjekter">Prosjekter</NavLink>
      </nav>
    </header>
  );
}

export default ToppMeny;
