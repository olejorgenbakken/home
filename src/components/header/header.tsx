import { NavLink } from "react-router-dom";
import { contrast } from "../../assets/functions";

import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute';
  background?: 'default' | 'transparent',
  color?: string
}

function Header({ position, background, color }: Props) {
  return (
    <header
      id="global-header"
      data-bg={background}
      data-pos={position}
      className={`header-fixed`}>
      <nav id="global-menu" style={contrast(color)}>
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
