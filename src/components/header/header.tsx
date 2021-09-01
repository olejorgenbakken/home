import { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

interface Props {
  type?: 'default' | 'fixed';
}

class Header extends Component<Props> {
  render() {
    switch (this.props.type) {
      case 'fixed':
        return (
          <header id="global-header" className="fixed">
            <nav className="width-1000">
              <ul id="global-menu">
                <li className="home">
                  <Link to="/" title="Til hovedsiden">
                    Ole Jørgen
                  </Link>
                </li>
                <li>
                  <Link to="/cv" title="Gå til CVen min">
                    CV
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        );

      default:
        return (
          <header id="global-header" className="default">
            <nav className="width-1000">
              <ul id="global-menu">
                <li className="home">
                  <Link to="/" title="Til hovedsiden">
                    Ole Jørgen
                  </Link>
                </li>
                <li>
                  <Link to="/cv" title="Gå til CVen min">
                    CV
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        );
    }
  }

}

export default Header;
