import { ReactNode } from "react"

import './InfoPanel.css';

interface Props {
    children: ReactNode
}

const InfoPanel = ({ children }: Props) => {
    return (
        <section className="info-panel">
            {children}
        </section>
    )
}

export default InfoPanel;