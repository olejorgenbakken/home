import "./footer.css";

import InlineLink from "../text/inlineLink/inlineLink";

function Footer() {
  return (
    <footer id="global-footer" >
      <section className="flex-column gap-2 constrain">
        <p>
          Takk for at du sjekket ut nettsiden min. &nbsp;
          <InlineLink type="external" link="https://github.com/olejorgenbakken/home">Du kan se kildekoden på GitHub her.</InlineLink>
        </p>
      </section>
    </footer>
  )
}

export default Footer;