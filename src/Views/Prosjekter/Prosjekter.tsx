import Vipps from '../../assets/Prosjekter/Vipps/Vipps';
import ProsjektElement from '../../components/ProsjektElement/ProsjektElement';
import Sidetittel from '../../components/Sidetittel/Sidetittel';

import './Prosjekter.css';

const prosjekter = [Vipps];

const Prosjekter = () => {
    return (
        <main id="prosjekter" className="gap-2">
            <Sidetittel tittel="Prosjekter" />

            <section className="gap-8">
                {
                    prosjekter.map((prosjekt) => (
                        <ProsjektElement key={prosjekt.slug()} href={`prosjekter/${prosjekt.slug()}`} bilde={prosjekt.bilder?.forsidebilde} tittel={prosjekt.tittel} />
                    ))
                }
            </section>
        </main>
    );
}

export default Prosjekter;
