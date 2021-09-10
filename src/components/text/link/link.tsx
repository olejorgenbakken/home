import { ReactComponent as ExternalIcon } from "../../../assets/icons/link_external.svg";
import "./link.css";

interface Props {
  href: string,
  title: string,
  text: string
}

function ExternalLink({ href, title, text }: Props) {
  return (
    <span className="external-link">
      <a href={href} title={title} className="link">
        {text}
      </a>
      <ExternalIcon />
    </span>
  );
}

export default ExternalLink;
