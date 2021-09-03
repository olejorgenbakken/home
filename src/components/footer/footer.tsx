import "./footer.css";

import Link from "../link/link";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="global-footer" >
        <section className="content">
          <p>
            Takk for at du sjekket ut nettsiden min. &nbsp;
            <Link
              href="https://github.com/olejorgenbakken/home"
              text="Du kan se kildekoden på GitHub her"
              title="Gå til GitHub"
            />
          </p>
        </section>
      </footer>
    )
  }
}

export default Footer;
