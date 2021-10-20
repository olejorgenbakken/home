import Knapp from "../Knapp/Knapp";

import './ProsjektElement.css'

interface Props {
    bilde: string,
    tittel: string,
    href: string
    label?: string,
}

const ProsjektElement = ({ bilde, tittel, href, label }: Props) => {
    return (
        <article className="project-item flex-column gap-2 ">
            <img src={bilde} alt="" />
            <section>
                <label>{label}</label>
                <h2>{tittel}</h2>
            </section>
            <Knapp href={href}>Se prosjektet</Knapp>
        </article>
    )
}

export default ProsjektElement;