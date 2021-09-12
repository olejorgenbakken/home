import { NavLink } from "react-router-dom";
import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute',
  transparent?: boolean,
}

function Header({ position, transparent }: Props) {
  return (
    <header
      id="global-header"
      data-bg={transparent}
      data-pos={position}
      className={`header-fixed`}>
      <nav id="global-menu">
        <NavLink to="/" title="Til hovedsiden" className="home" activeClassName="active">
          Hovedside
        </NavLink>
        <ul>
          <li>
            <NavLink to="/cv" title="Gå til CVen min" activeClassName="active">
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
