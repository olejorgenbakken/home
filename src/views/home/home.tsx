import Hero from "../../components/hero/hero";
import Grid from "../../components/layout/grid/grid";

import webpages from "../../assets/data/webpages";
import './home.css'
import Card from "../../components/cards/imageCard/generic";

const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <Card key={page.id} link={page.href}>{page.title}</Card>
  ));
  return (externalList);
}

function Home() {
  return (
    <main id="home">
      <Hero>
        <article className="contain">
          <h1>Hei, Ole Jørgen her 👋</h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her.</p>
        </article>
      </Hero>
      <Grid columns={4} width="contained">
        {setWebpages()}
      </Grid>
    </main>
  );
}

export default Home;
