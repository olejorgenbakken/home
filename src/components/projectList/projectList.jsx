import Grid from "../grid/grid";
import ProjectItem from "./projectItem/projectItem";

import "./projectList.css";

const projects = [
  {
    id: 1,
    title: "Vipps",
    logo: "https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC9jMlwvMTczMDkwXC9wcm9qZWN0c1wvMjkzMjE0XC9hc3NldHNcL2Y5XC81MzA0NTM0XC8zZDY2ODI1NjBkNmIwYTNjNTE2ZmY4NGE4OTA1OWYxNi0xNjE2NTA3MTc5LnBuZyJ9:frontify:f0sbjyAcp16QRISRP87qx_sO4msYVwvRgwl21DowjRc?width=2400",
    description: "",
    color: "#FF5B24",
  },
  {
    id: 2,
    title: "Eksempel",
    logo: "",
    description: "",
  },
];

function ProjectList() {
  const projectList = projects.map((project) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      logo={project.logo}
      description={project.description}
    />
  ));

  return (
    <main className="width-1000" id="project-list">
      <header>
        <h1>Siste prosjekter</h1>
      </header>
      <Grid elements={projectList} />
    </main>
  );
}

export default ProjectList;
