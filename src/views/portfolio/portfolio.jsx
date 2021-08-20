import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./portfolio.css";

import Header from "../../components/header/header";
import ProjectList from "../../components/projectList/projectList";
import Footer from "../../components/footer/footer";
import Vipps from "./projects/vipps/vipps";

function Portfolio() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/vipps`}>
        <Header type="project" />
        <Vipps />
        <Footer />
      </Route>
      <Route exact path={`${match.path}`}>
        <Header />
        <ProjectList />
        <Footer />
      </Route>
      <Route path={`${match.path}`}>
        <Header />
        <p className="width-1000">
          Dette prosjektet finnes ikke 😭, prøv et av disse:
        </p>
        <ProjectList />
        <Footer />
      </Route>
    </Switch>
  );
}

export default Portfolio;
