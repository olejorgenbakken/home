import { Link } from "react-router-dom";

import "./header.css";

function Header(props) {
  return (
    <header id="global-header" type={props.type}>
      <section className="width-1000">
        <h1>
          <Link to="/" title="Tilbake til startsiden">
            Ole Jørgen
          </Link>
        </h1>

        <nav>
          <ul id="global-menu">
            <li>
              <Link to="/portefølje" title="Se porteføljen min">
                Portefølje
              </Link>
            </li>
            <li>
              <Link to="/cv" title="Gå til CVen min">
                CV
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
