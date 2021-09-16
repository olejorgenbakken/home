import { Link } from "react-router-dom";

import './button.css';

interface Props {
    link?: string,
    children: string
}

function Button({ link, children }: Props) {
    if (link) {
        return (
            <Link to={link}>
                <button className="button link-button"><p>{children}</p></button>
            </Link>
        )

    } else {
        return (<button className="button"><p>{children}</p></button>)
    }
}

export default Button;