import { Component } from "react";
import ProjectCard from "../../../components/cards/project/project";
import Grid from "../../../components/grid/grid";

import projects from "../../../assets/data/projects";

import './projectsList.css';

class ProjectsList extends Component {
    getProjects() {
        const externalList = projects.map((project) => (
            <ProjectCard
                link={project.slug}
                image={project.image}
                heading={project.workplace}
                description={project.role}
                color={project.color}
            />
        ));

        return (externalList);
    }

    render() {
        return (
            <main id="projects">
                <Grid elements={this.getProjects()} columns={1} width="contained" />
            </main>
        );
    }
}

export default ProjectsList;
