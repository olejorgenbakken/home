import Card from "../../components/card/card";
import projects from "../../assets/data/projects";

import './Projects.css';
import Gallery from "../../components/gallery/gallery";

const getProjects = () => {
    const externalList = projects.map((project) => (
        <Card large={true} key={project.slug} link={`/prosjekter/${project.slug}`} image={project.cover}>
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
            <Gallery type="grid" columns='1' align="center"> {getProjects()} </Gallery>
        </main>
    );
}

export default Projects;
