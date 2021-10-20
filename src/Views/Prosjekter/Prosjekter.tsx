import prosjekter from '../../assets/Prosjekter/Prosjekter';
import ProsjektElement from '../../components/ProsjektElement/ProsjektElement';
import Sidetittel from '../../components/Sidetittel/Sidetittel';

import './Prosjekter.css';

const externalList = prosjekter.map((prosjekt) => (
    <ProsjektElement key={prosjekt.slug()} href={`prosjekter/${prosjekt.slug()}`} bilde={prosjekt.bilder.forsidebilde} label={prosjekt.rolle} tittel={prosjekt.tittel} />
));

const Prosjekter = () => {
    return (
        <main>
            <Sidetittel tittel="Prosjekter" />

            <article className="gap-4">
                {externalList}
            </article>
        </main>
    );
}

export default Prosjekter;
