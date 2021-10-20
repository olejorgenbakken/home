import { Link } from "react-router-dom";
import { ReactComponent as EksternLenke } from "../../assets/Ikoner/ekstern-lenke.svg";

import './Lenke.css'

interface Props {
  href: string,
  children: string
}

function InlineLink({ href, children }: Props) {
  if (href.includes('https://')) {
    return (
      <span className="external-link">
        <a href={href} className="link">
          {children}
          <EksternLenke />
        </a>
      </span>
    )
  } else {
    return (
      <Link className="internal-link link" to={href}>
        {children}
      </Link >
    )
  }
}

export default InlineLink;