import Emne from '../../Emne/Emne';

import './CVInnhold.css';

interface Props {
    tittel: string,
    sted: string,
    start: [
        år: number,
        måned?: string,
        dag?: number
    ],
    slutt?: [
        år: number,
        måned?: string,
        dag?: number
    ],
    beskrivelse?: string,
    emner?: string[]
}

const sjekkEmner = (emner?: string[]) => {
    if (emner) {
        return (
            <footer className="emner">
                {emner.sort().map((emne) => {
                    return (<Emne key={emne} tekst={emne} />)
                })}
            </footer>
        )
    }
}


const sjekkTiden = (start: [
    år: number,
    måned?: string,
    dag?: number
],
    slutt?: [
        år: number,
        måned?: string,
        dag?: number
    ]) => {
    if (start && slutt)
        return (<label className="tid">{start[1]} {start[0]} – {slutt[1]} {slutt[0]}</label>)
    else {
        return (<label className="tid">{start[1]} {start[0]} – Nå</label>)
    }
}

const sjekkBeskrivelse = (beskrivelse?: string) => {
    if (beskrivelse) {
        return (
            <p>{beskrivelse}</p>
        )
    }
}

const CVInnhold = ({ tittel, sted, start, slutt, beskrivelse, emner }: Props) => {
    return (
        <article className="cv-innhold gap-1">
            <header>
                <h4 className="sted">{sted}</h4>
                <p className="tittel">{tittel}</p>
                {sjekkTiden(start, slutt)}
            </header>
            {sjekkBeskrivelse(beskrivelse)}
            {sjekkEmner(emner)}
        </article >
    )
}

export default CVInnhold;