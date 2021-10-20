import prosjekter from '../../assets/data/prosjekter';
import ProsjektElement from '../../components/ProsjektElement/ProsjektElement';

import './Prosjekter.css';

const externalList = prosjekter.map((prosjekt) => (
    <ProsjektElement key={prosjekt.slug} href={`prosjekter/${prosjekt.slug}`} bilde={prosjekt.bilder.forside} label={prosjekt.rolle} tittel={prosjekt.oppgave.tittel} />
));

const Prosjekter = () => {
    return (
        <main className="gap-2">
            <header className="">
                <h1>Prosjekter</h1>
            </header>

            <section className="gap-2">
                {externalList}
            </section>
        </main>
    );
}

export default Prosjekter;
