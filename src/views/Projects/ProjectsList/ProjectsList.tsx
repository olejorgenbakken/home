import ProjectCard from "../../../components/cards/projectCard/project";
import Grid from "../../../components/layout/grid/grid";

import './projectsList.css';

interface Props {
    projects: {
        slug: string,
        workplace: string,
        description: string,
        image: string,
        color: string
    }[]
}

const setProjects = (projects: {
    slug: string, workplace: string,
    description: string,
    image: string,
    color: string
}[]) => {
    const externalList = projects.map((project) => (
        <ProjectCard key={project.slug} link={project.slug} color={project.color} image={project.image}>
            <h1>{project.workplace}</h1>
            <p>{project.description}</p>
        </ProjectCard>
    ));
    return externalList;
}

function ProjectsList({ projects }: Props) {
    return (
        <main id="projects">
            <Grid columns={1} width="contained" align="center"> {setProjects(projects)} </Grid>
        </main>
    );
}

export default ProjectsList;
