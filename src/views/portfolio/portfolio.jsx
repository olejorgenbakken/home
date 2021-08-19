import "./portfolio.css";
import ExternalList from "../../components/sections/other/external/externalList";

function Portfolio() {
  return (
    <section className="width-900" id="portfolio">
      <h1>Portefølje</h1>
      <p>Her kommer alle prosjektene mine når jeg har fått lagt de inn</p>

      <ExternalList />
    </section>
  );
}

export default Portfolio;
