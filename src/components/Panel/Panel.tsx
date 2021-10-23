import { ReactNode } from "react"

import './Panel.css';

interface Props {
    ikon?: string,
    tittel?: string,
    children: ReactNode[]
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
            <header className="infopanel-header">
                {hentIkon(ikon)}
                <label>{tittel}</label>
            </header>
        )
    }
}

const Panel = ({ ikon, tittel, children }: Props) => {
    return (
        <aside className="infopanel gap-2">
            {hentHeading(ikon, tittel)}
            <section className="infopanel-innhold">
                {children}
            </section>
        </aside>
    )
}

export default Panel;