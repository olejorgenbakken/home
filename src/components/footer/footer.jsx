import "./footer.css";

function Footer(props) {
  return (
    <footer id="global-footer">
      <p>
        {props.text} <a href={props.link}>{props.linkText}</a>
      </p>
    </footer>
  );
}

export default Footer;
