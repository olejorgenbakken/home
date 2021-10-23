import './Om.css';

interface Props {
    kunde: string,
    rolle: string,
    start: {
        måned: string,
        år: number
    },
    slutt: {
        måned: string,
        år: number
    },
}

const OmProsjektet = ({ kunde, rolle, start, slutt }: Props) => {
    return (
        <aside className="om-prosjektet">
            <label>Om prosjektet</label>
            <section className="om-prosjektet-innhold">
                <article>
                    <label>Kunde</label>
                    <p>{kunde}</p>
                </article>

                <article>
                    <label>Min rolle</label>
                    <p>{rolle}</p>
                </article>

                <article>
                    <label>Start</label>
                    <p>{start.måned.replace(start.måned.charAt(0), start.måned.charAt(0).toUpperCase())} {start.år}</p>
                </article>

                <article>
                    <label>Slutt</label>
                    <p>{slutt.måned.replace(slutt.måned.charAt(0), slutt.måned.charAt(0).toUpperCase())} {slutt.år}</p>
                </article>
            </section>
        </aside >
    )
}

export default OmProsjektet;