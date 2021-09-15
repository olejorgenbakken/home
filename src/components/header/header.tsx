import { NavLink } from "react-router-dom";
import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute',
  transparent?: boolean,
}

function Header({ position, transparent }: Props) {
  return (
    <header id="global-header" data-transparent={transparent} data-position={position}>
      <nav className="contain">
        <ul id="global-menu">
          <li>
            <NavLink to="/" className="home">Hjem</NavLink>
          </li>
          <ul>
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
