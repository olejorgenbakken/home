import { match } from "assert";
import { Component } from "react";
import { Route, Switch, RouteComponentProps, withRouter } from "react-router";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NotFound from "../NotFound/NotFound";
import ProjectsList from "./ProjectsList/ProjectsList";
import Vipps from "./Vipps/Vipps";

class ProjectRouter extends Component<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/vipps`}>
                    <Vipps />
                </Route>
                <Route exact path={this.props.match.url}>
                    <Header />
                    <ProjectsList />
                    <Footer />
                </Route>
                <Route path={`${this.props.match.url}/*`}>
                    <Header position="absolute" background="transparent" />
                    <NotFound message="Dette prosjektet har jeg ikke jobbet med :/" link="/prosjekter" linkTitle="Se alle prosjekter" />
                    <Footer />
                </Route>
            </Switch >
        )
    }
}

export default withRouter(ProjectRouter);