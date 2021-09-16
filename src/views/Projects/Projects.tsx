import Card from "../../components/card/card";
import projects from "../../assets/data/projects";

import './Projects.css';

const getProjects = () => {
    const externalList = projects.map((project) => (
        <Card large={true} key={project.slug} link={`/prosjekter/${project.slug}`} image={project.images.cover}>
            <h2>{project.business.name}</h2>
        </Card>
    ));
    return externalList;
}

function Projects() {
    return (
        <main id="projects">
            <header className="contain projects-header">
                <h1>Prosjekter</h1>
            </header>
            <section> {getProjects()} </section>
        </main>
    );
}

export default Projects;
