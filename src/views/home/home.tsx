import { Component } from "react";
import Hero from "../../components/hero/hero";
import Grid from "../../components/grid/grid";
import LinkCard from "../../components/cards/link/link";

import webpages from "../../assets/data/webpages";
import './home.css'

class Home extends Component {
  hero = {
    heading: {
      level: "h1",
      title: "Hei, Ole Jørgen her 👋"
    },
    description: "Jeg designer og utvikler ting på internett. Denne nettsiden er nettopp påbegynt, så sjekk ut sidene nedenfor til jeg har fått samlet alt her."
  }

  getWebpages() {
    const externalList = webpages.map((page) => (
      <LinkCard
        key={page.id}
        text={page.title}
        href={page.href}
      />
    ));

    return (externalList);
  }

  render() {
    return (
      <main id="home">
        <Hero
          background="gradient"
          heading={this.hero.heading}
          description={this.hero.description}
        />
        <Grid elements={this.getWebpages()} columns={4} width="contained" />
      </main>
    );
  }

}

export default Home;
