import { useParams } from "react-router";
import Button from "../../components/Knapp/Knapp";
import InfoPanel from "../../components/InfoPanel/InfoPanel";

import "./Prosjekt.css";
import prosjekter from "../../assets/Prosjekter/Prosjekter";
import Sidetittel from "../../components/Sidetittel/Sidetittel";
import Feilside from "../Feilside/Feilside";
import Test from "../../components/Prosjekt/Testing/Test";

const Prosjekt = () => {
  const { prosjekt } = useParams();

  try {
    const prosjektet = prosjekter.find((p) => p.slug() === prosjekt);

    return (
      <main id="prosjekt">
        <Sidetittel
          bilde={prosjektet.bilder.forsidebilde}
          tittel={prosjektet.tittel}
        />

        <InfoPanel>
          <header>
            <h2>Om prosjektet</h2>
          </header>

          <article>
            <h3>Problemstilling</h3>
            <p>{prosjektet.tittel}</p>
          </article>

          <article>
            <h3>Utførelse</h3>
            <p>
              {prosjektet
                .tidsperiode()
                .replace(
                  prosjektet.tidsperiode().charAt(0),
                  prosjektet.tidsperiode().charAt(0).toUpperCase()
                )}
            </p>
          </article>
        </InfoPanel>

        <section className="testing  gap-2">
          <header>
            <h2>Innsikt</h2>
          </header>
          <article className="gap-8">
            {prosjektet.tester.map((test) => {
              return (
                <Test
                  key={test.tittel}
                  tittel={test.tittel}
                  beskrivelse={test.beskrivelse}
                  funn={test.funn}
                />
              );
            })}
          </article>
        </section>

        <figure className="gap-1">
          <img src={prosjektet.bilder.prototype} alt="" />

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

          <Button href={prosjektet.href}>Se prototypen</Button>
        </section>
      </main>
    );
  } catch {
    return (
      <main className="main-project">
        <Feilside
          feilkode="404"
          forklaring="Dette prosjektet har jeg ikke jobba på :("
        >
          <Button href="/prosjekter">Gå til alle prosjekter</Button>
        </Feilside>
      </main>
    );
  }
};

export default Prosjekt;
