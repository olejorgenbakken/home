import { arbeidserfaring, utdanning } from '../../assets/CV/CV';
import CVInnhold from './CVInnhold/CVInnhold';

const CV = () => {
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
                    {
                        arbeidserfaring.map(jobb => {
                            return (
                                <CVInnhold key={jobb.stilling} tittel={jobb.stilling} sted={jobb.sted} start={jobb.start().år} slutt={jobb.slutt().år} beskrivelse={jobb.beskrivelse} />
                            )
                        })
                    }
                </article>
                <hr />
                <article className="gap-4">
                    <header>
                        <h3>Utdanning</h3>
                    </header>
                    {
                        utdanning.map(skole => {
                            return (
                                <CVInnhold key={skole.tittel} tittel={skole.tittel} sted={skole.sted} start={skole.start().år} slutt={skole.slutt().år} beskrivelse={skole.beskrivelse} />
                            )
                        })
                    }
                </article>
            </article>
        </section>
    );
}

export default CV;