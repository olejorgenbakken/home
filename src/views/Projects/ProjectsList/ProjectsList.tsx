import ProjectCard from "../../../components/cards/project/project";
import Grid from "../../../components/layout/grid/grid";

import projects from "../../../assets/data/projects";

import './projectsList.css';

const setProjects = () => {
    const externalList = projects.map((project) => (
        <ProjectCard
            key={project.slug}
            link={project.slug}
            content={{ text: { heading: { level: "h1", text: project.workplace }, description: project.description }, image: project.image }}
            color={project.color}
        />
    ));
    return externalList;
}

function ProjectsList() {
    return (
        <main id="projects">
            <Grid elements={setProjects()} styling={{ columns: 1, width: "contained", align: "center" }} />
        </main>
    );
}

export default ProjectsList;
