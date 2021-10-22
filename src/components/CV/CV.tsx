import { arbeidserfaring, utdanning } from '../../assets/CV/CV';
import CVInnhold from './CVInnhold/CVInnhold';

const CV = () => {
    return (
        <article className="cv gap-1">
            <h2>CV</h2>

            <div className="gap-4">
                <article className="gap-1">
                    <header>
                        <h3>Arbeidserfaring</h3>
                    </header>
                    <div className="innhold gap-4">
                        {
                            arbeidserfaring.map(jobb => {
                                return (
                                    <CVInnhold key={jobb.stilling} tittel={jobb.stilling} sted={jobb.sted} start={jobb.start().år} slutt={jobb.slutt().år} beskrivelse={jobb.beskrivelse} emner={jobb.emner} />
                                )
                            })
                        }
                    </div>
                </article>
                <article className="gap-1">
                    <header>
                        <h3>Utdanning</h3>
                    </header>
                    <div className="innhold gap-4">
                        {
                            utdanning.map(skole => {
                                return (
                                    <CVInnhold key={skole.tittel} tittel={skole.tittel} sted={skole.sted} start={skole.start().år} slutt={skole.slutt().år} beskrivelse={skole.beskrivelse} emner={skole.emner} />
                                )
                            })
                        }
                    </div>
                </article>
            </div>
        </article>
    );
}

export default CV;