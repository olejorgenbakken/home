import { ReactNode } from "react"

import './InfoPanel.css';

interface Props {
    children: ReactNode
}

const InfoPanel = ({ children }: Props) => {
    return (
        <aside className="info-panel">
            {children}
        </aside>
    )
}

export default InfoPanel;