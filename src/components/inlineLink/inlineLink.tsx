import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ExternalIcon } from "../../assets/icons/link_external.svg";
import './inlineLink.css'

interface Props {
  type: 'internal' | 'external',
  link: string,
  children: ReactNode
}

function InlineLink({ type, link, children }: Props) {
  if (type === 'external') {
    return (
      <span className="external-link">
        <a href={link} className="link">
          {children}
        </a>
        <ExternalIcon />
      </span>
    )
  } else {
    return (
      <Link className="internal-link" to={link}>
        {children}
      </Link >
    )
  }
}

export default InlineLink;