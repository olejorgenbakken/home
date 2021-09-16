import { NavLink } from "react-router-dom";
import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute',
}

function Header({ position }: Props) {
  return (
    <header id="global-header" data-position={position}>
      <nav>
        <ul id="global-menu" className="flex-row constrain">
          <li>
            <NavLink to="/" className="home">Hjem</NavLink>
          </li>
          <ul className="flex-row">
            <li>
              <NavLink to="/prosjekter" activeClassName="active">Prosjekter</NavLink>
            </li>
            <li>
              <NavLink to="/cv" activeClassName="active">CV</NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
