import Vipps from '../../assets/Prosjekter/Vipps/Vipps';
import ProsjektElement from '../../components/Prosjekt/ProsjektElement/ProsjektElement';
import Sidetittel from '../../components/Sidetittel/Sidetittel';

import './Prosjekter.css';

const prosjekter = [Vipps];

const Prosjekter = () => {
    return (
        <main>
            <Sidetittel tittel="Prosjekter" />

            <article className="gap-4">
                {
                    prosjekter.map((prosjekt) => (
                        <ProsjektElement key={prosjekt.slug()} href={`prosjekter/${prosjekt.slug()}`} bilde={prosjekt.bilder.forsidebilde} label={prosjekt.rolle} tittel={prosjekt.tittel} />
                    ))
                }
            </article>
        </main>
    );
}

export default Prosjekter;
