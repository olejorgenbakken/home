import './CVInnhold.css';

interface Props {
    tittel: string,
    sted: string,
    start: number,
    slutt: number,
    beskrivelse: string
}

const CVInnhold = ({ tittel, sted, start, slutt, beskrivelse }: Props) => {
    return (
        <article>
            <header>
                <label>
                    <time>{start}</time>
                    &nbsp;–&nbsp;
                    <time>{slutt}</time>
                </label>
                <h4 className="role">{tittel}</h4>
                <h5 className="place">{sted}</h5>
            </header>
            <p>{beskrivelse}</p>
        </article >
    )
}

export default CVInnhold;