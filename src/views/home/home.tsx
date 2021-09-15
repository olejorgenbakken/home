import Hero from "../../components/hero/hero";

import webpages from "../../assets/data/webpages";
import './home.css'
import Card from "../../components/card/card";
import Gallery from "../../components/gallery/gallery";

const setWebpages = () => {
  const externalList = webpages.map((page) => (
    <Card key={page.id} link={page.href}>
      <p>{page.title}</p>
    </Card>
  ));
  return (externalList);
}

function Home() {
  return (
    <main id="home" className="contain">
      <Hero>
        <article>
          <h1>Hei, Ole Jørgen her 👋</h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her.</p>
        </article>
      </Hero>
      <Gallery type="grid" columns='4'>
        {setWebpages()}
      </Gallery>
    </main>
  );
}

export default Home;
