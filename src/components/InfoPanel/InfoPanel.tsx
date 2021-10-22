import { ReactNode } from "react"

import './Infopanel.css';

interface Props {
    children: ReactNode
}

const Infopanel = ({ children }: Props) => {
    return (
        <aside className="infopanel">
            {children}
        </aside>
    )
}

export default Infopanel;