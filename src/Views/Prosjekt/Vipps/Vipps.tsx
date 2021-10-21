import Button from "../../../components/Knapp/Knapp";

import "./Vipps.css";
import Sidetittel from "../../../components/Sidetittel/Sidetittel";

import prosjekt from '../../../assets/Prosjekter/Vipps/Vipps';
import OmProsjektet from "../../../components/Prosjekt/Om/Om";
import Testing from "../../../components/Prosjekt/Testing/Tester";

const Vipps = () => {
  console.log(prosjekt)
  return (
    <main id="prosjekt">
      <Sidetittel
        bilde={prosjekt.bilder.forsidebilde}
        tittel={prosjekt.tittel}
      />

      <OmProsjektet kunde={prosjekt.bedrift} start={prosjekt.start()} slutt={prosjekt.slutt()} />

      <Testing tester={prosjekt.tester} />

      <figure className="gap-1">
        <img src={prosjekt.bilder.prototype} alt="" />

        <figcaption>Den ferdige prototypen for sluttbrukere.</figcaption>
      </figure>

      <section className="prosjekt-prototype gap-2">
        <header>
          <h2>Interaktiv prototype</h2>
          <p>
            Prototypen ble utviklet og testet med bruk av Figma, og du kan se
            den ferdige versjonen ved å klikke på lenken under.
          </p>
        </header>

        <Button href={prosjekt.href}>Se prototypen</Button>
      </section>
    </main>
  );
};

export default Vipps;
