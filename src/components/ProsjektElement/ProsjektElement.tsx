import Knapp from '../Knapp/Knapp';

import './ProsjektElement.css'

interface Props {
    bilde: string,
    tittel: string,
    href: string
    label?: string,
}

const ProsjektElement = ({ bilde, tittel, href, label }: Props) => {
    return (
        <article className="prosjekt gap-1 ">
            <img src={bilde} alt="" />

            <section className="prosjekt-info gap-2">
                <header>
                    <label>{label}</label>
                    <h2>{tittel}</h2>
                </header>

                <Knapp href={href}>Se prosjektet</Knapp>
            </section>
        </article>
    )
}

export default ProsjektElement;