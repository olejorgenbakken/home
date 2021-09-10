import Hero from "../../components/hero/hero";
import Grid from "../../components/layout/grid/grid";
import LinkButton from "../../components/buttons/link/link";

import webpages from "../../assets/data/webpages";
import './home.css'
import Card from "../../components/cards/generic/generic";

const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <LinkButton
      key={page.id}
      type="external"
      text={page.title}
      link={page.href}
    />
  ));
  return (externalList);
}

function Home() {
  return (
    <main id="home">
      <Hero
        background="gradient"
        content={{
          heading: {
            level: 'h1',
            text: "Hei, Ole Jørgen her 👋"
          },
          description: "Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her."
        }}
      />
      <Grid elements={setWebpages()} styling={{ columns: 4, width: "contained" }} />
    </main>
  );
}

export default Home;
