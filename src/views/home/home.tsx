import Hero from "../../components/hero/hero";
import Grid from "../../components/layout/grid/grid";

import webpages from "../../assets/data/webpages";
import './home.css'
import Card from "../../components/card/card";

const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <Card type="default" key={page.id} link={page.href}>
      <p>{page.title}</p>
    </Card>
  ));
  return (externalList);
}

function Home() {
  return (
    <main id="home" className="container">
      <Hero height="50">
        <article>
          <h1>Hei, Ole Jørgen her 👋</h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her.</p>
        </article>
      </Hero>
      <Grid columns={4}>
        {setWebpages()}
      </Grid>
    </main>
  );
}

export default Home;
