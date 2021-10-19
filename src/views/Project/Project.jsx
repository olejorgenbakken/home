import { useParams } from "react-router";
import projects from "../../assets/data/projects";

import Testing from "../../components/project/testing/testing";
import NotFound from "../NotFound/NotFound";

import "./Project.css";
import Button from "../../components/button/Button";

const Project = () => {
  const { project } = useParams();
  let thisProject = null;

  projects.map((p) => {
    if (p.slug === project) {
      thisProject = p;
    }

    return thisProject;
  });

  if (thisProject) {
    return (
      <main className="main-project flex-column gap-8">
        <section className="project-header flex-column gap-2">
          <img
            src={thisProject.images.cover}
            className="project-header-image"
            alt=""
          />
          <article className="project-header-lead flex-column gap-1 constrain padding">
            <h1>{thisProject.data.title}</h1>
          </article>
        </section>

        <section className="project-about flex-column constrain padding gap-2 backdrop">
          <header>
            <h2>Om prosjektet</h2>
          </header>

          <article>
            <h3>Problemstilling</h3>
            <p>{thisProject.data.task}</p>
          </article>

          <article>
            <h3>Bakgrunn</h3>
            <p>{thisProject.data.background}</p>
          </article>
        </section>

        <Testing tests={thisProject.data.tests} />

        <section className="project-prototype flex-column gap-2 constrain padding">
          <header className="flex-column gap-2">
            <h2>Interaktiv prototype</h2>
          </header>

          <figure className="flex-column gap-1">
            <img src={thisProject.images.finished[0]} alt="" />
            <figcaption>
              Prototypen ble utviklet og testet med bruk av Figma, og du kan se
              den ferdige versjonen ved å klikke på lenken under.
            </figcaption>
          </figure>
          <Button href={thisProject.data.href}>Se prototypen</Button>
        </section>
      </main>
    );
  } else {
    return (
      <main className="main-project">
        <article className="no-project constrain flex-column padding gap-2">
          <header>
            <h1>Oida 😯</h1>
            <p>
              Dette prosjektet har jeg enten ikke jobbet på, eller lagt til
              ennå. Sjekk heller ut noe jeg har jobbet på.
            </p>
          </header>
          <Button href="/prosjekter">Gå til alle prosjekter</Button>
        </article>
      </main>
    );
  }
};

export default Project;
