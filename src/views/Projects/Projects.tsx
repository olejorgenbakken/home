import Card from "../../components/card/card";
import projects from "../../assets/data/projects";

import './Projects.css';
import Gallery from "../../components/gallery/gallery";

const setProjects = () => {
    const externalList = projects.map((project) => (
        <Card large={true} key={project.business.name} link={`/prosjekter/${project.business.name}`} image={project.cover}>
            <h2>{project.business.name}</h2>
        </Card>
    ));
    return externalList;
}

function Projects() {
    return (
        <main id="projects">
            <Gallery type="grid" columns='1' align="center"> {setProjects()} </Gallery>
        </main>
    );
}

export default Projects;
