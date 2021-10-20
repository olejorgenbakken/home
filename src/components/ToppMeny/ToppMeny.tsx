import { NavLink } from "react-router-dom";
import "./ToppMeny.css";

const ToppMeny = () => {
  return (
    <header>
      <nav>
        <ul id="global-menu" className="flex-row">
          <li>
            <NavLink activeClassName="active" to="/om-meg">Om</NavLink>
          </li>
          <li>
            <NavLink to="/" exact activeClassName="active" className="home">Hjem</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/prosjekter">Prosjekter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ToppMeny;
