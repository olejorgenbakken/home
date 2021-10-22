import Knapp from '../Knapp/Knapp';

import './ProsjektElement.css'

interface Props {
    tittel: string,
    href: string
    bilde?: string,
}

const ProsjektElement = ({ tittel, href, bilde }: Props) => {
    return (
        <article className="prosjekt gap-1 ">
            <img src={bilde} alt="" loading="lazy" />

            <section className="prosjekt-info gap-2">
                <h2>{tittel}</h2>
                <Knapp href={href} tittel="Til prosjektet">Se prosjektet</Knapp>
            </section>
        </article>
    )
}

export default ProsjektElement;