import Emne from '../../Emne/Emne';

import './CVInnhold.css';

interface Props {
    tittel: string,
    sted: string,
    start: number,
    slutt: number,
    beskrivelse: string,
    emner?: string[]
}

const sjekkEmner = (emner?: string[]) => {
    if (emner) {
        return (
            <section className="emner">
                {emner.sort().map((emne) => {
                    return (<Emne>{emne}</Emne>)
                })}
            </section>
        )
    }
}


const sjekkTiden = (start: number, slutt: number) => {
    if (start !== slutt) {
        return (
            <label className="tid">
                <time>{start}</time>
                &nbsp;–&nbsp;
                <time>{slutt}</time>
            </label>
        )
    } else {
        return (
            <label className="tid">
                <time>{slutt}</time>
            </label>
        )
    }
}

const CVInnhold = ({ tittel, sted, start, slutt, beskrivelse, emner }: Props) => {
    return (
        <article className="cv-innhold gap-1">
            <header>
                <h4 className="role">{tittel}</h4>
                <h5 className="place">{sted}</h5>
                {sjekkTiden(start, slutt)}
            </header>
            <p>{beskrivelse}</p>
            {sjekkEmner(emner)}
        </article >
    )
}

export default CVInnhold;