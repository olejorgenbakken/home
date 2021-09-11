import { Route, Switch } from "react-router";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Vipps from './Vipps/Vipps';
import NotFound from "../NotFound/NotFound";
import ProjectsList from "./ProjectsList/ProjectsList";

import projects from "../../assets/data/projects";

import './project.css';

function ProjectRouter() {
    return (
        <Switch>
            <Route path="/prosjekter/vipps">
                <Header position="absolute" transparent={true} />
                <Vipps />
                <Footer />
            </Route>
            <Route exact path="/prosjekter">
                <Header />
                <ProjectsList projects={projects} />
                <Footer />
            </Route>
            <Route path="/">
                <Header position="absolute" transparent={true} />
                <NotFound message="Dette prosjektet har jeg ikke jobbet med :/" link="/prosjekter" linkTitle="Se alle prosjekter" />
                <Footer />
            </Route>
        </Switch >
    )
}

export default ProjectRouter;