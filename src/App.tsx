import loadable from '@loadable/component';

import { Component } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./Views/Home/Home";
import ProjectRouter from './Views/Projects/ProjectRouter';
import CV from "./Views/CV/Cv";
import NotFound from "./Views/NotFound/NotFound";
import Footer from "./components/footer/footer";

import "./styles/global.css";

const ProjectsRouter = loadable(() => import("./Views/Projects/ProjectRouter"));


class App extends Component<RouteComponentProps, any> {
  render() {
    return (
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/prosjekter`}>
          <ProjectsRouter />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/cv`}>
          <Header />
          <CV />
          <Footer />
        </Route>
        <Route exact path={process.env.PUBLIC_URL}>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/">
          <Header background="transparent" position="absolute" />
          <NotFound message="Denne siden ekisterer ikke (ennå)" link="/" linkTitle="Gå til hovedsiden" />
          <Footer />
        </Route>
      </Switch >
    );
  }

}

export default withRouter(App);
