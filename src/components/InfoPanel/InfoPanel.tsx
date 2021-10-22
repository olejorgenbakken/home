import { ReactNode } from "react"

import './Infopanel.css';

interface Props {
    ikon?: string,
    tittel?: string,
    children: ReactNode
}

const hentIkon = (ikon?: string) => {
    if (ikon) {
        return (
            { ikon }
        )
    }
}

const hentHeading = (ikon?: string, tittel?: string) => {
    if (tittel) {
        return (
            <header>
                {hentIkon(ikon)}
                <label>{tittel}</label>
            </header>
        )
    }
}

const Infopanel = ({ ikon, tittel, children }: Props) => {
    return (
        <aside className="infopanel">
            {hentHeading(ikon, tittel)}
            {children}
        </aside>
    )
}

export default Infopanel;