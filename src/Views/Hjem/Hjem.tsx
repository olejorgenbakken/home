import "./Hjem.css";
import Header from "../../components/Header/header";
import Kort from "../../components/Kort/Kort";

const Hjem = () => {
  return (
    <main>
      <section className="wrapper">
        <Header tittel="Ole Jørgen"></Header>

        <section className="lenker">
          <Kort tittel="Design">
            <ul>
              <li><a href="https://www.figma.com/@olejorgen">Figma</a></li>
              <li><a href="https://www.behance.net/olejorgenbakken">Behance</a></li>
            </ul>
          </Kort>
          <Kort tittel="Utvikling">
            <ul>
              <li><a href="https://github.com/olejorgenbakken">GitHub</a></li>
            </ul>
          </Kort>
          <Kort tittel="CV">
            <ul>
              <li><a href="https://linkedin.com/in/ole-jorgen-bakken">LinkedIn</a></li>
            </ul>
          </Kort>
        </section>
      </section>
    </main >
  );
}

export default Hjem;
