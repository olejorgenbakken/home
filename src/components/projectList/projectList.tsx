import { Component } from "react";
import Grid from "../grid/grid";
import ProjectItem from "./projectItem/projectItem";

import "./projectList.css";

interface Props {
  projects: Array<{
    id?: number,
    logo: string,
    title: string,
    description: string
  }>
}

class ProjectList extends Component<Props> {

  getList() {
    const projectListEl = this.props.projects.map((project) => (
      <ProjectItem logo={project.logo} title={project.title} description={project.description} />
    ));

    return (projectListEl);
  }

  render() {
    return (
      <main className="width-1000" id="project-list">
        <header>
          <h1>Siste prosjekter</h1>
          <Grid elements={this.getList()} />
        </header>
      </main>
    );
  }
}


export default ProjectList;
