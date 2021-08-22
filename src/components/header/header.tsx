import { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

interface Props {
  type?: string
}

class Header extends Component<Props> {
  render() {
    return (
      <header id="global-header" data-type={this.props.type}>
        <section className="width-1000">
          <span className="my-name">
            <Link to="/" title="Tilbake til startsiden">
              Ole Jørgen
            </Link>
          </span>

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

}

export default Header;
