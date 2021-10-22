import { ReactNode } from "react"

import './Infopanel.css';

interface Props {
    children: ReactNode
}

const Infopanel = ({ children }: Props) => {
    return (
        <article className="infopanel">
            {children}
        </article>
    )
}

export default Infopanel;