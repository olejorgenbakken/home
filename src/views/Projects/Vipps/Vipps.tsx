import Button from "../../../components/buttons/generic/Button";
import ProjectHeader from "../../../components/project/projectHeader/projectHeader";
import projects from "../../../assets/data/projects";
import Paragraph from "../../../components/text/paragraph/Paragraph";

import './vipps.css';

const project = projects.find(project => project.slug === "vipps");

const setBackground = (color: string) => {
    let style = {
        background: color
    }
    return style;
}

function Vipps() {
    if (project !== undefined) {
        return (
            <main id="vipps" className="main-project" style={setBackground(project.color)}>
                <ProjectHeader
                    content={{ text: { heading: project.workplace }, tags: project.tags }}
                    styling={{ background: project.image, color: project.color }}
                />
                <Paragraph
                    heading={{ level: "h2", text: "Problemstilling" }}
                    text="Hvordan kan vi samle inn mer penger til veldedighet"
                    styling={
                        {
                            alignContent: "left",
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

export default Vipps;