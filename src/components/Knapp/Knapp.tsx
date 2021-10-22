import { Link } from "react-router-dom";
import { ReactComponent as EksternLenke } from "../../assets/Ikoner/ekstern-lenke.svg";

import './Knapp.css';

interface Props {
    href: string,
    tittel: string,
    children: string
}

function Button({ href, tittel, children }: Props) {
    if (href.includes('https://')) {
        return (
            <a href={href} target="_blank" rel="noreferrer" title={tittel} className="knapp ekstern">
                {children}
                <EksternLenke />
            </a>
        )
    } else {
        return (
            <Link to={href} title={tittel} className="knapp">
                {children}
            </Link>
        )
    }
}

export default Button;