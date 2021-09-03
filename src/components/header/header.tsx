import { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute';
  background?: 'default' | 'transparent'
}

class Header extends Component<Props> {
  render() {
    return (
      <header
        id="global-header"
        data-bg={this.props.background}
        data-pos={this.props.position}
        className={`header-fixed`}>
        <nav id="global-menu">
          <Link to="/" title="Til hovedsiden" className="home">
            Hovedside
          </Link>
          <ul>
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

export default Header;
