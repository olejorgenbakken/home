import { Component } from "react";

import projects from "../../assets/data/projects";
import ProjectCard from "../../components/cards/project/project";
import Grid from "../../components/grid/grid";

import './projects.css';

class Projects extends Component {

    getProjects() {
        const externalList = projects.map((project) => (
            <ProjectCard
                href={project.slug}
                cover={project.cover}
                title={project.workplace}
                year={project.year.start}
                role={project.role}
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

export default Projects;
