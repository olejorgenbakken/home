import loadable from "@loadable/component";

import { Component } from "react";
import { Route, Switch } from "react-router";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NotFound from "../NotFound/NotFound";
import ProjectsList from "./ProjectsList/ProjectsList";

const Vipps = loadable(() => import(`./Vipps/Vipps`));

class ProjectRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/prosjekter/vipps">
                    <Header position="absolute" background="transparent" />
                    <Vipps />
                    <Footer />
                </Route>
                <Route exact path="/prosjekter">
                    <Header />
                    <ProjectsList />
                    <Footer />
                </Route>
                <Route path="/">
                    <Header position="absolute" background="transparent" />
                    <NotFound message="Dette prosjektet har jeg ikke jobbet med :/" link="/prosjekter" linkTitle="Se alle prosjekter" />
                    <Footer />
                </Route>
            </Switch >
        )
    }
}

export default ProjectRouter;