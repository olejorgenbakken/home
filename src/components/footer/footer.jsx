import "./footer.css";

import Link from "../text/externalLink/externalLink";

function Footer(props) {
  return (
    <footer id="global-footer">
      <section className="width-1000 content">
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
  );
}

export default Footer;
