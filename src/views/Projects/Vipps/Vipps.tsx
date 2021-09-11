import Button from "../../../components/buttons/generic/Button";
import ProjectHeader from "../../../components/project/projectHeader/projectHeader";
import projects from "../../../assets/data/projects";

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
                <section className="intro">
                    <h2>Problemstilling</h2>
                    <p>Hvordan kan vi samle inn mer penger til veldedighet</p>
                </section>

                <Button link="/prosjekter">Til alle prosjekter</Button>
            </main>
        )
    } else {
        return null;
    }
}

export default Vipps;