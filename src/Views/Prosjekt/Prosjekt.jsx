import { useParams } from "react-router";
import Button from "../../components/Knapp/Knapp";
import InfoPanel from "../../components/InfoPanel/InfoPanel";

import "./Prosjekt.css";
import prosjekter from "../../assets/Prosjekter/Prosjekter";
import Sidetittel from "../../components/Sidetittel/Sidetittel";
import Feilside from "../Feilside/Feilside";

const hentFunn = (funn) => {
  const funnArticle = funn.map((f) => {
    return (
      <article className="segment">
        <h4>{f.tittel}</h4>
        <p>{f.beskrivelse}</p>
      </article>
    );
  });

  return funnArticle;
};

const hentTester = (tester) => {
  const testSeksjon = tester.map((test) => {
    return (
      <article className="test gap-1">
        <header>
          <label className="method">{test.type}</label>
          <h3>{test.tittel}</h3>
        </header>
        <article className="results gap-4">{hentFunn(test.funn)}</article>
      </article>
    );
  });

  return testSeksjon;
};

const Prosjekt = () => {
  const { prosjekt } = useParams();

  try {
    const prosjektet = prosjekter.find((p) => p.slug() === prosjekt);

    console.log(prosjektet.tidsperiode());

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
            <q>{prosjektet.tittel}</q>
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
          <article className="gap-8">{hentTester(prosjektet.tester)}</article>
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
