import './home.css'

import projects from '../../assets/data/projects';

import Hero from "../../components/hero/hero";
import ProjectItem from '../../components/projectItem/projectItem';


const Home = () => {
  return (
    <main id="home" className="flex-column">
      <Hero height="40">
        <article className="flex-column gap-1 constrain padding">
          <h1>Hei, <span>Ole Jørgen her</span></h1>
          <p>Jeg designer og utvikler ting på internett. Denne nettsiden bygges fortsatt på, men kikk deg gjerne rundt allikevel.</p>
        </article>
      </Hero>

      <ProjectItem key={projects[0].slug} href={`prosjekter/${projects[0].slug}`} image={projects[0].images.cover} label='Siste prosjekt' title={projects[0].data.task} />
    </main >
  );
}

export default Home;
