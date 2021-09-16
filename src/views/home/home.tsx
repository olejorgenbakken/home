import Hero from "../../components/hero/hero";

import webpages from "../../assets/data/webpages";
import './home.css'
import Card from "../../components/card/card";
import Gallery from "../../components/gallery/gallery";
import Button from "../../components/button/Button";

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
    <main id="home" className="flex-column gap-4">
      <Hero>
        <article className="flex-column gap-1 constrain padding">
          <h1>Hei, Ole Jørgen her 👋</h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her.</p>
        </article>
      </Hero>
      <section className="constrain padding">
        <Gallery type="grid" columns='4'>
          {setWebpages()}
        </Gallery>
      </section>
      <Hero color="pink">
        <article className="flex-column gap-2 constrain padding">
          <h2>Sjekk ut prosjektene jeg har jobbet på</h2>
          <Button link="/prosjekter">Gå til prosjekter</Button>
        </article>
      </Hero>
    </main>
  );
}

export default Home;
