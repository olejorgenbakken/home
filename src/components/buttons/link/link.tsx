import { Link } from "react-router-dom";
import Paragraph from "../../text/paragraph/Paragraph";
import './link.css'

interface Props {
  type: 'internal' | 'external',
  text: string
  link: string
}

function LinkButton({ type, text, link }: Props) {
  if (type === 'external') {
    return (
      <a className="card-link" href={link} title={`Gå til ${text}`}>
        <Paragraph text={text} styling={{ textAlign: "center" }} />
      </a >
    )
  } else {
    return (
      <Link className="card-link" to={link} title={`Gå til ${text}`}>
        <Paragraph text={text} />
      </Link >
    )
  }
}

export default LinkButton;