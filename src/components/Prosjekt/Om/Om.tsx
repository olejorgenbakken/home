import InfoPanel from "../../InfoPanel/InfoPanel"

import './Om.css';

interface Props {
    kunde: string,
    start: {
        måned: string,
        år: number
    },
    slutt: {
        måned: string,
        år: number
    },
}

const OmProsjektet = ({ kunde, start, slutt }: Props) => {
    return (
        <InfoPanel>
            <header>
                <h2>Om prosjektet</h2>
            </header>

            <article>
                <h3>Kunde</h3>
                <p>{kunde}</p>
            </article>

            <article className="tidsrom">
                <article>
                    <label>Start</label>
                    <p>{start.måned.replace(start.måned.charAt(0), start.måned.charAt(0).toUpperCase())} {start.år}</p>
                </article>

                <article>
                    <label>Slutt</label>
                    <p>{slutt.måned.replace(slutt.måned.charAt(0), slutt.måned.charAt(0).toUpperCase())} {slutt.år}</p>
                </article>
            </article>
        </InfoPanel>
    )
}

export default OmProsjektet;