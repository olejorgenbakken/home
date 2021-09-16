import projects from "../../assets/data/projects";

import "./Project.css";
import Testing from "../../components/project/testing/testing";
import ProjectHeader from "../../components/project/header/projectHeader";
import ProjectFooter from "../../components/project/footer/projectFooter";
import ProjectAbout from "../../components/project/about/projectAbout";
import { useParams } from "react-router";
import NotFound from "../NotFound/NotFound";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const setColors = (color) => {
  const style = {
    color: "#ffffff",
    background: color,
  };

  return style;
};

function Project() {
  const { project } = useParams();
  let thisProject = null;

  projects.map((p) => {
    if (p.slug === project) {
      thisProject = p;
    }

    return thisProject;
  });

  if (thisProject) {
    return (
      <div id="project">
        <Header position="absolute" />
        <main
          className="main-project"
          style={setColors(thisProject.business.color.secondary)}
        >
          <ProjectHeader
            backgroundImage={thisProject.cover}
            gradientColor={thisProject.business.color.secondary}
            logo={thisProject.business.logo}
            business={thisProject.business.name}
            title={thisProject.data.title}
          />
          <ProjectAbout
            task={thisProject.data.task}
            background={thisProject.data.background}
          />
          <Testing tests={thisProject.data.tests} />
          <ProjectFooter />
        </main>
        <Footer />
      </div>
    );
  } else {
    console.log(true);
    return (
      <NotFound
        message="Dette prosjektet eksisterer ikke (ennå)"
        link="/prosjekter"
        linkTitle="Gå til alle prosjekter"
      ></NotFound>
    );
  }
}

export default Project;
