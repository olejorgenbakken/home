import { Link } from "react-router-dom";
import { ReactComponent as LenkeIkon } from "../../assets/ikoner/lenke.svg";

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
          <LenkeIkon />
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