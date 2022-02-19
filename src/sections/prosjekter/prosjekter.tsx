import Etikett from "../../components/Etikett/etikett";
import Kort from "../../components/Kort/kort";
import prosjekter from "../../data/prosjekter";

import './prosjekter.css';

const Prosjekter = () => {
    return (
        <section className="prosjekter">
            <header>
                <h2>Prosjekter</h2>
            </header>
            <section className="prosjektliste">
                {prosjekter.map((prosjekt) => {
                    return (
                        <Kort farge="grå" href={prosjekt.href} bilde={prosjekt.bilde}>
                            <h3>{prosjekt.tittel}</h3>
                            <footer>
                                {prosjekt.type.map((tag) => {
                                    return (<Etikett>{tag}</Etikett>)
                                })}
                            </footer>
                        </Kort>
                    )
                })}
            </section>
        </section>
    );
}

export default Prosjekter;