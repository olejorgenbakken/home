import Button from "../../../components/Knapp/Knapp";

import "./Vipps.css";
import Sidetittel from "../../../components/Sidetittel/Sidetittel";

import prosjekt from '../../../assets/Prosjekter/Vipps/Vipps';
import OmProsjektet from "../../../components/Prosjekt/Om/Om";
import Testing from "../../../components/Prosjekt/Testing/Tester";
import Banner from "../../../components/Banner/Banner";
import Bakgrunn from "../../../components/Prosjekt/Bakgrunn/Bakgrunn";
import Figur from "../../../components/Figur/Figur";

const Vipps = () => {
  return (
    <main id="vipps" className="gap-4">
      <Sidetittel
        bilde={prosjekt.bilder!.forsidebilde}
        tittel={prosjekt.tittel}
      />

      <OmProsjektet kunde={prosjekt.bedrift} rolle={prosjekt.rolle} start={prosjekt.start()} slutt={prosjekt.slutt()} />

      <Bakgrunn bakgrunn={prosjekt.bakgrunn} />

      <Testing tester={prosjekt.tester!} />

      <Figur src={prosjekt.bilder!.prototype!} beskrivelse="Den ferdige prototypen for sluttbrukere." />

      <Banner bakgrunn="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80">
        <div>
          <h2>Interaktiv prototype</h2>
          <p>
            Prototypen ble utviklet og testet med bruk av Figma, og du kan se
            den ferdige versjonen ved å klikke på lenken under.
          </p>
        </div>
        <Button href={prosjekt.href!}>Se prototypen</Button>
      </Banner>

    </main>
  );
};

export default Vipps;
