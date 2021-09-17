import projects from "../../../assets/data/projects";

import "./Project.css";
import Testing from "../../../components/project/testing/testing";
import ProjectHeader from "../../../components/project/header/projectHeader";
import ProjectFooter from "../../../components/project/footer/projectFooter";
import ProjectAbout from "../../../components/project/about/projectAbout";
import { useParams } from "react-router";
import NotFound from "../../NotFound/NotFound";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

const setColors = (color) => {
  const style = {
    background: color,
  };

  return style;
};

const Project = () => {
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
          className="main-project flex-column gap-4"
          style={setColors(thisProject.business.colors.secondary)}
        >
          <ProjectHeader
            backgroundImage={thisProject.images.cover}
            gradientColor={thisProject.business.colors.secondary}
            logo={thisProject.images.logo}
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
    return (
      <NotFound
        message="Dette prosjektet eksisterer ikke (ennå)"
        link="/prosjekter"
        linkTitle="Gå til alle prosjekter"
      ></NotFound>
    );
  }
};

export default Project;
