import { Component } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

import projects from "../../../assets/data/projects";

import './vipps.css';
import Hero from "../../../components/hero/hero";

class Vipps extends Component {

    getProject() {
        let vipps = projects.find(project => project.slug === 'vipps');
        return vipps;
    }

    headerStyling() {
        let style = {
            background: this.getProject()?.color,
        }

        return style;
    }

    render() {
        return (
            <Route>
                <Header position="absolute" background="transparent" color={this.getProject()?.color} />
                <main id="vipps" style={this.headerStyling()}>
                    <Hero headingLevel="h1" headingTitle="Vipps"></Hero>
                    <Link to={"/prosjekter"}>Til alle prosjekter</Link>
                </main>
                <Footer />
            </Route>
        )
    }
}

export default Vipps;