import { Component } from "react";

import './vipps.css';

import Button from "../../../components/button/Button";
import ProjectHeader from "../../../components/project/header/header";
import projects from "../../../assets/data/projects";
import Text from "../../../components/project/paragraph/Paragraph";

let project = projects.find(project => project.slug === "vipps");

class Vipps extends Component {

    setBackground() {
        let style = {
            background: project?.color
        }
        return style;
    }

    render() {

        if (project != undefined) {
            return (
                <main id="vipps" className="main-project" style={this.setBackground()}>
                    <ProjectHeader
                        text={{ heading: project.workplace, subheading: project.role }}
                        background={project.image}
                        color={project.color}
                        tags={project.tags}
                    />
                    <Text
                        heading={{ level: "h1", text: "Brief" }}
                        paragraph="in" color="#fff" />
                    <Button text={"Til alle prosjekter"} link="/prosjekter" />
                </main>
            )
        }
    }
}

export default Vipps;