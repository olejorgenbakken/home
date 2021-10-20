import { arbeidserfaring, utdanning } from '../../assets/CV/CV';
import CVInnhold from './CVInnhold/CVInnhold';

const CV = () => {
    const erfaringsSeksjon = arbeidserfaring.map(jobb => {
        return (<CVInnhold tittel={jobb.stilling} sted={jobb.sted} start={jobb.start().år} slutt={jobb.slutt().år} beskrivelse={jobb.beskrivelse} />)
    })

    const utdanningsSeksjon = utdanning.map(skole => {
        return (<CVInnhold tittel={skole.tittel} sted={skole.sted} start={skole.start().år} slutt={skole.slutt().år} beskrivelse={skole.beskrivelse} />)
    })

    return (
        <section className="gap-2">
            <header>
                <h2>CV</h2>
            </header>

            <article className="gap-4">
                <article className="gap-4">
                    <header>
                        <h3>Arbeidserfaring</h3>
                    </header>
                    {erfaringsSeksjon}
                </article>
                <hr />
                <article className="gap-4">
                    <header>
                        <h3>Arbeidserfaring</h3>
                    </header>
                    {utdanningsSeksjon}
                </article>
            </article>
        </section>
    );
}

export default CV;