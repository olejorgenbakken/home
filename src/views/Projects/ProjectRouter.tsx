import loadable from "@loadable/component";

import { Route, Switch } from "react-router";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NotFound from "../NotFound/NotFound";
import ProjectsList from "./ProjectsList/ProjectsList";

import projects from "../../assets/data/projects";

import './project.css';

const Vipps = loadable(() => import(`./Vipps/Vipps`));

function ProjectRouter() {
    return (
        <Switch>
            <Route path="/prosjekter/vipps">
                <Header position="absolute" background="transparent" color="#000" />
                <Vipps />
                <Footer />
            </Route>
            {/* <Route exact path="/prosjekter/:project">
                <Header />
                <ProjectsList projects={ } />
                <Footer />
            </Route> */}
            <Route exact path="/prosjekter">
                <Header />
                <ProjectsList projects={projects} />
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

export default ProjectRouter;