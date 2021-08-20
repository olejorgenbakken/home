import { ReactComponent as Icon } from "../../../assets/icons/link_external.svg";
import "./externalLink.css";

function Link(props) {
  return (
    <span className="external-link">
      <a href={props.href} title={props.title} className="external-link">
        {props.text}
      </a>
      <Icon />
    </span>
  );
}

export default Link;
