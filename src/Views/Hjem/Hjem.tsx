import './Hjem.css'

import ProsjektElement from '../../components/ProsjektElement/ProsjektElement';
import Sidetittel from '../../components/Sidetittel/Sidetittel';
import Vipps from '../../assets/Prosjekter/Vipps/Vipps';
import Banner from '../../components/Banner/Banner';


const Hjem = () => {
  return (
    <main id="hjem" className="gap-4">
      <Sidetittel tittel="Hei, Ole Jørgen her" beskrivelse="Jeg jobber om dagen med å få opp en side som samler alle mine prosjekter. Det tar litt tid, men du kan jo se gjennom det som er her." />

      <ProsjektElement href={`prosjekter/${Vipps.slug()}`} bilde={Vipps.bilder!.forsidebilde} tittel={Vipps.tittel} />
    </main >
  );
}

export default Hjem;
