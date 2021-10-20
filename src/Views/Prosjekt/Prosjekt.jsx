import { useParams } from "react-router";
import Button from "../../components/Knapp/Knapp";
import InfoPanel from "../../components/InfoPanel/InfoPanel";

import "./Prosjekt.css";
import IkkeFunnet from "../IkkeFunnet/IkkeFunnet";
import prosjekter from "../../assets/data/prosjekter";

const hentFunn = (funn) => {
  const funnArticle = funn.map((funne) => {
    return (
      <article className="segment">
        <h4>{funne.tittel}</h4>
        <p>{funne.beskrivelse}</p>
      </article>
    );
  });

  return funnArticle;
};

const hentTester = (tester) => {
  const testSeksjon = tester.map((test) => {
    return (
      <section className="test  gap-1 ">
        <header>
          <label className="method">{test.type}</label>
          <h3>{test.title}</h3>
        </header>
        <section className="results  gap-4">{hentFunn(test.funn)}</section>
      </section>
    );
  });

  return testSeksjon;
};

const Prosjekt = () => {
  const { prosjekt } = useParams();

  try {
    const prosjektet = prosjekter.find((p) => p.slug === prosjekt);

    return (
      <main className="main-project  gap-8">
        <header className="project-header  gap-2">
          <img
            src={prosjektet.bilder.forside}
            className="project-header-image"
            alt=""
          />
          <h1>{prosjektet.tittel}</h1>
        </header>

        <InfoPanel>
          <header>
            <h2>Om prosjektet</h2>
          </header>

          <article>
            <h3>Problemstilling</h3>
            <p>{prosjektet.oppgave.tittel}</p>
          </article>

          <article>
            <h3>Bakgrunn</h3>
            <p>{prosjektet.oppgave.beskrivelse}</p>
          </article>
        </InfoPanel>

        <section className="gap-2">
          <h2>Prosjektets gang</h2>
          <p>{prosjektet.oppgave.bakgrunn}</p>
        </section>

        <section className="testing  gap-2">
          <header className="">
            <h2>Innsikt</h2>
          </header>
          <section className="gap-12">
            {hentTester(prosjektet.oppgave.tester)}
          </section>
        </section>

        <section className="project-prototype  gap-2 ">
          <header className="gap-2">
            <h2>Interaktiv prototype</h2>
          </header>

          <figure className="gap-1">
            <img src={prosjektet.bilder.fullført[0]} alt="" />

            <figcaption>
              Prototypen ble utviklet og testet med bruk av Figma, og du kan se
              den ferdige versjonen ved å klikke på lenken under.
            </figcaption>
          </figure>

          <Button href={prosjektet.prototype}>Se prototypen</Button>
        </section>
      </main>
    );
  } catch {
    return (
      <main className="main-project">
        <IkkeFunnet
          error={404}
          message="Dette prosjektet har jeg ikke jobba på :("
        >
          <Button href="/prosjekter">Gå til alle prosjekter</Button>
        </IkkeFunnet>
      </main>
    );
  }
};

export default Prosjekt;
