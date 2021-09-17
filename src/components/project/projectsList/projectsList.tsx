import projects from "../../../assets/data/projects";
import Card from "../../card/card";

import './projectsList.css';

const ProjectsList = () => {
    const externalList = projects.map((project) => (
        <Card large={true} key={project.slug} link={`/prosjekter/${project.slug}`} image={project.images.cover}>
            <h2>{project.business.name}</h2>
        </Card>
    ));

    return (
        <section className="flex-column gap-2">
            {externalList}
        </section>
    );
}

export default ProjectsList;