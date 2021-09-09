import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

interface Props {
  position?: 'relative' | 'fixed' | 'absolute';
  background?: 'default' | 'transparent',
  color?: string
}

class Header extends Component<Props> {

  lightOrDark(color: any) {
    if (color !== undefined) {
      let style = {
        color: '',
      }

      var r, g, b, hsp;
      color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;

      hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
      );

      if (hsp > 127.5) {
        style.color = '#111111';
        return style;
      }
      else {
        style.color = '#ffffff';
        return style;
      }
    }

  }

  render() {
    return (
      <header
        id="global-header"
        data-bg={this.props.background}
        data-pos={this.props.position}
        className={`header-fixed`}>
        <nav id="global-menu" style={this.lightOrDark(this.props.color)}>
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

}

export default Header;
