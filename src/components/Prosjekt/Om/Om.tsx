
import Infopanel from '../../Infopanel/Infopanel';
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
        <Infopanel>
            <header>
                <h2>Om prosjektet</h2>
            </header>
            <section className="om-prosjektet">
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
        </Infopanel >
    )
}

export default OmProsjektet;