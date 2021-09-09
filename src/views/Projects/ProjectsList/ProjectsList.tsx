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
                content={{ text: { heading: { level: "h1", title: project.workplace }, description: project.description }, image: project.image }}
                color={project.color}
            />
        ));

        return (externalList);
    }

    render() {
        return (
            <main id="projects">
                <Grid elements={this.getProjects()} styling={{ columns: 1, width: "contained", align: "center" }} />
            </main>
        );
    }
}

export default ProjectsList;
