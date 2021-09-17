import './home.css'

import webpages from "../../assets/data/webpages";
import projects from '../../assets/data/projects';

import Hero from "../../components/hero/hero";
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
    <main id="home" className="flex-column">
      <Hero height="50">
        <article className="flex-column gap-1 constrain padding">
          <h1>Hei, Ole Jørgen her 👋</h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden bygges fortsatt på, men kikk deg gjerne rundt allikevel.</p>
        </article>
      </Hero>

      <Hero height="30">
        <article className="constrain padding flex-column gap-1">
          <header>
            <h2>Andre steder å finne meg</h2>
          </header>
          <Gallery type="grid" columns='4'>
            {setWebpages()}
          </Gallery>
        </article>
      </Hero>

      <Hero color={projects[0].business.colors.secondary} height="80">
        <article className="flex-column gap-2 constrain padding latest-project">
          <h2>Sjekk ut mitt siste prosjekt</h2>
          <Card large={true} key={projects[0].slug} link={`/prosjekter/${projects[0].slug}`} image={projects[0].images.cover}>
            <h3>{projects[0].business.name}</h3>
          </Card>
        </article>
      </Hero>
    </main>
  );
}

export default Home;
