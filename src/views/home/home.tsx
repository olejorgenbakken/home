import Hero from "../../components/hero/hero";
import ExternalList from "../../components/external/externalList";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Component } from "react";

class Home extends Component {
  content = {
    heading: "Hei 👋",
    text: "Jeg heter Ole Jørgen, og jeg lager ting på internett. Denne nettsiden er nettopp påbegynt."
  }

  render() {
    return (
      <section id="home" >
        <Header />
        <main>
          <Hero content={this.content}
          />
          <section className="width-1000 padding">
            <ExternalList />
          </section>
        </main>
        <Footer />
      </section>
    );
  }

}

export default Home;
