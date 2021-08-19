import Hero from "../../components/hero/hero";
import ExternalList from "../../components/external/externalList";

function Home(props) {
  return (
    <section>
      <Hero
        title="Hei 👋"
        message="Jeg heter Ole Jørgen, og jeg lager ting på internett. Denne nettsiden er nettopp påbegynt."
        background="gradient"
      />
      <section className="width-1000 padding">
        <ExternalList />
      </section>
    </section>
  );
}

export default Home;
