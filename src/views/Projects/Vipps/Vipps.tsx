import { Component } from "react";

import Button from "../../../components/button/Button";
import ProjectHeader from "../../../components/project/header/projectHeader";
import projects from "../../../assets/data/projects";
import Paragraph from "../../../components/project/paragraph/Paragraph";

import './vipps.css';

let project = projects.find(project => project.slug === "vipps");

class Vipps extends Component {

    setBackground() {
        let style = {
            background: project?.color
        }
        return style;
    }

    render() {
        if (project !== undefined) {
            return (
                <main id="vipps" className="main-project" style={this.setBackground()}>
                    <ProjectHeader
                        text={{ heading: project.workplace }}
                        background={project.image}
                        color={project.color}
                        tags={project.tags}
                    />
                    <Paragraph
                        content={
                            {
                                heading: { level: "h2", text: "Problemstilling" },
                                paragraph: "Hvordan kan vi samle inn mer penger til veldedighet"
                            }
                        }
                        styling={
                            {
                                align: "left",
                                color: "#fff"
                            }
                        }
                    />
                    <Button text={"Til alle prosjekter"} link="/prosjekter" />
                </main>
            )
        } else {
            return null;
        }
    }
}

export default Vipps;