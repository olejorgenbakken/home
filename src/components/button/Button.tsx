import { Link } from "react-router-dom";
import { ReactComponent as ExternalIcon } from "../../assets/icons/link_external.svg";

import './button.css';

interface Props {
    href: string,
    children: string
}

function Button({ href, children }: Props) {
    if (href.includes('https://')) {
        return (
            <a href={href} className="button external">
                {children}
                <ExternalIcon />
            </a>
        )
    } else {
        return (
            <Link to={href} className="button">
                {children}
            </Link>
        )
    }
}

export default Button;