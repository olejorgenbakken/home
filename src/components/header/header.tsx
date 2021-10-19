import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header id="global-header">
      <nav>
        <ul id="global-menu" className="flex-row constrain">
          <li>
            <NavLink to="/" exact activeClassName="active" className="home">Hjem</NavLink>
          </li>
          <ul className="flex-row">
            <li>
              <NavLink activeClassName="active" to="/prosjekter">Prosjekter</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/cv">CV</NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
