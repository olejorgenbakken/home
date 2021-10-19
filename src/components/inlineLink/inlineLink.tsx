import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ExternalIcon } from "../../assets/icons/link_external.svg";
import './inlineLink.css'

interface Props {
  href: string,
  children: ReactNode
}

function InlineLink({ href, children }: Props) {
  if (href.includes('https://')) {
    return (
      <span className="external-link">
        <a href={href} className="link">
          {children}
          <ExternalIcon />
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