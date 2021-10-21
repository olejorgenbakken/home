import { ReactNode } from "react"

import './Infopanel.css';

interface Props {
    children: ReactNode
}

const Infopanel = ({ children }: Props) => {
    return (
        <article className="info-panel">
            {children}
        </article>
    )
}

export default Infopanel;