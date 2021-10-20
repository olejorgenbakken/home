import './Hjem.css'

import Banner from "../../components/Banner/Banner";
import ProsjektElement from '../../components/ProsjektElement/ProsjektElement';
import prosjekter from '../../assets/data/prosjekter';


const Hjem = () => {
  return (
    <main id="home" className="column">
      <Banner høyde="40">
        <article className="gap-1 ">
          <h1>Hei, <span>Ole Jørgen her</span></h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden bygges fortsatt på, men kikk deg gjerne rundt allikevel.</p>
        </article>
      </Banner>

      <ProsjektElement key={prosjekter[0].slug} href={`prosjekter/${prosjekter[0].slug}`} bilde={prosjekter[0].bilder.forside} label='Siste prosjekt' tittel={prosjekter[0].oppgave.tittel} />
    </main >
  );
}

export default Hjem;
