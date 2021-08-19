import "./footer.css";

function Footer(props) {
  return (
    <footer id="global-footer">
      <section className="width-1000">
        <p>
          {props.text} <a href={props.link}>{props.linkText}</a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
