import { Link } from "react-router-dom";
import { ReactComponent as EksternLenke } from "../../assets/Ikoner/ekstern-lenke.svg";

import './Knapp.css';

interface Props {
    href: string,
    children: string
}

function Button({ href, children }: Props) {
    if (href.includes('https://')) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className="knapp ekstern">
                {children}
                <EksternLenke />
            </a>
        )
    } else {
        return (
            <Link to={href} className="knapp">
                {children}
            </Link>
        )
    }
}

export default Button;