import { Component } from "react";
import Hero from "../../components/hero/hero";
import Grid from "../../components/grid/grid";
import LinkCard from "../../components/cards/link/link";

import webpages from "../../assets/data/webpages";
import './home.css'

class Home extends Component {
  content = {
    heading: "Hei 👋",
    text: "Jeg heter Ole Jørgen, og jeg lager ting på internett. Denne nettsiden er nettopp påbegynt."
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
          content={this.content}
        />
        <section className="width-1000 padding external-links">
          <Grid elements={this.getWebpages()} />
        </section>
      </main>
    );
  }

}

export default Home;
