import { Link } from "react-router-dom";

import "./header.css";

function Header(props) {
  const headerStyle = {
    background: props.background,
  };

  return (
    <header id="global-header" style={headerStyle}>
      <section className="width-1000">
        <h1>
          <Link to="/" title="Tilbake til startsiden">
            {props.name}
          </Link>
        </h1>

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
      </section>
    </header>
  );
}

export default Header;
