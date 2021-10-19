import { useParams } from "react-router";
import projects from "../../assets/data/projects";

import Button from "../../components/button/Button";
import NotFound from "../NotFound/NotFound";

import "./Project.css";

const getTests = (tests) => {
  const getSegments = (findings) => {
    const segment = findings.map((finding) => {
      return (
        <article className="segment">
          <h4> {finding.title}</h4>
          <p>{finding.summary}</p>
        </article>
      );
    });
    return segment;
  };

  const testArticles = tests.map((test) => {
    return (
      <article className="test flex-column gap-1 constrain padding">
        <header>
          <label className="method">{test.type}</label>
          <h3>{test.title}</h3>
        </header>
        <article className="results flex-column gap-4">
          {getSegments(test.findings)}
        </article>
      </article>
    );
  });
  return testArticles;
};

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

        <section className="testing flex-column gap-2">
          <header className="constrain padding">
            <h2>Innsikt</h2>
          </header>
          <section className="flex-column gap-12">
            {getTests(thisProject.data.tests)}
          </section>
        </section>

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
        <NotFound
          error={404}
          message="Dette prosjektet har jeg ikke jobba på :("
        >
          <Button href="/prosjekter">Gå til alle prosjekter</Button>
        </NotFound>
      </main>
    );
  }
};

export default Project;
