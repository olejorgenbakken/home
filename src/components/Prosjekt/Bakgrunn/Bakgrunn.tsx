import './Bakgrunn.css';

interface Props {
    bakgrunn: string
}

const Bakgrunn = ({ bakgrunn }: Props) => {
    return (
        <section className="prosjekt-bakgrunn">
            <article className="gap-1">
                <h2>Bakgrunn for prosjektet</h2>
                <p>{bakgrunn}</p>
            </article>
        </section>
    )
}

export default Bakgrunn;