import { Link } from "react-router-dom";

import "./header.css";

function Header(props) {
  return (
    <header id="global-header">
      <section className="introduction">
        <h1>
          <Link to="/">{props.name}</Link>
        </h1>
        <p>{props.description}</p>
      </section>

      <nav>
        <ul id="global-menu">
          <li>
            <Link to="/portefølje">Portefølje</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
