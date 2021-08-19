import "./footer.css";

function Footer(props) {
  return (
    <footer id="global-footer">
      <article className="content width-900">
        <p>
          {props.text} <a href={props.link}>{props.linkText}</a>
        </p>
      </article>
    </footer>
  );
}

export default Footer;
