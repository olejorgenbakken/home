import { Link } from "react-router-dom";
import { ReactComponent as EksternLenke } from "../../assets/Ikoner/ekstern-lenke.svg";

import './Lenke.css'

interface Props {
  href: string,
  tittel: string,
  children: string
}

function InlineLink({ href, tittel, children }: Props) {
  if (href.includes('https://')) {
    return (
      <a href={href} target="_blank" rel="noreferrer" title={tittel} className="ekstern-link link">
        {children}
        <EksternLenke />
      </a>
    )
  } else {
    return (
      <Link className="internal-link link" title={tittel} to={href}>
        {children}
      </Link >
    )
  }
}

export default InlineLink;