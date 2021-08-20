import Hero from "../../components/hero/hero";
import ExternalList from "../../components/external/externalList";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Home(props) {
  return (
    <section id="home">
      <Header />
      <main>
        <Hero
          title="Hei 👋"
          message="Jeg heter Ole Jørgen, og jeg lager ting på internett. Denne nettsiden er nettopp påbegynt."
        />
        <section className="width-1000 padding">
          <ExternalList />
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Home;
