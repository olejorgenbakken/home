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
            <footer className="emner">
                {emner.sort().map((emne) => {
                    return (<Emne tekst={emne} />)
                })}
            </footer>
        )
    }
}


const sjekkTiden = (start: number, slutt: number) => {
    if (start !== slutt) {
        return (
            <p className="tid">
                <time dateTime={start.toString()}>{start}</time>
                &nbsp;–&nbsp;
                <time dateTime={slutt.toString()}>{slutt}</time>
            </p>
        )
    } else {
        return (
            <p className="tid">
                <time dateTime={slutt.toString()}>{slutt}</time>
            </p>
        )
    }
}

const CVInnhold = ({ tittel, sted, start, slutt, beskrivelse, emner }: Props) => {
    return (
        <article className="cv-innhold gap-1">
            <header>
                <h4 className="sted">{sted}</h4>
                <label className="tittel">{tittel}</label>
                {sjekkTiden(start, slutt)}
            </header>
            <p>{beskrivelse}</p>
            {sjekkEmner(emner)}
        </article >
    )
}

export default CVInnhold;