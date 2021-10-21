import './CVInnhold.css';

interface Props {
    tittel: string,
    sted: string,
    start: number,
    slutt: number,
    beskrivelse: string
}

const CVInnhold = ({ tittel, sted, start, slutt, beskrivelse }: Props) => {
    const sjekkTiden = () => {
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

    return (
        <article className="gap-1">
            <header>
                <h4 className="role">{tittel}</h4>
                <h5 className="place">{sted}</h5>
                {sjekkTiden()}
            </header>
            <p>{beskrivelse}</p>
        </article >
    )
}

export default CVInnhold;