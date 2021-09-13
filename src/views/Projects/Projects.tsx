import Card from "../../components/card/card";
import Grid from "../../components/layout/grid/grid";
import projects from "../../assets/data/projects";

import './Projects.css';

const setProjects = () => {
    const externalList = projects.map((project) => (
        <Card type="large" key={project.slug} link={`/prosjekter/${project.slug}`} color={project.color} image={project.image}>
            <h2>{project.workplace}</h2>
        </Card>
    ));
    return externalList;
}

function Projects() {
    return (
        <main id="projects">
            <Grid columns={1} align="center"> {setProjects()} </Grid>
        </main>
    );
}

export default Projects;
