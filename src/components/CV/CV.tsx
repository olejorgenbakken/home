import { arbeidserfaring, utdanning } from '../../assets/CV/CV';
import CVInnhold from './CVInnhold/CVInnhold';

const CV = () => {
    return (
        <section className="cv gap-1">
            <header>
                <h2>CV</h2>
            </header>

            <section className="gap-4">
                <section className="gap-1">
                    <header>
                        <h3>Arbeidserfaring</h3>
                    </header>
                    <section className="innhold gap-4">
                        {
                            arbeidserfaring.map(jobb => {
                                return (
                                    <CVInnhold key={jobb.stilling} tittel={jobb.stilling} sted={jobb.sted} start={jobb.start().år} slutt={jobb.slutt().år} beskrivelse={jobb.beskrivelse} emner={jobb.emner} />
                                )
                            })
                        }
                    </section>
                </section>
                <hr />
                <section className="gap-1">
                    <header>
                        <h3>Utdanning</h3>
                    </header>
                    <section className="innhold gap-4">
                        {
                            utdanning.map(skole => {
                                return (
                                    <CVInnhold key={skole.tittel} tittel={skole.tittel} sted={skole.sted} start={skole.start().år} slutt={skole.slutt().år} beskrivelse={skole.beskrivelse} emner={skole.emner} />
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CV;