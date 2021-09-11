import Button from "../../../components/buttons/generic/Button";
import projects from "../../../assets/data/projects";

import './vipps.css';
import Hero from "../../../components/hero/hero";
import Grid from "../../../components/layout/grid/grid";

const project = projects.find(project => project.slug === "vipps");

const setBackground = (color: string) => {
    let style = {
        background: color
    }
    return style;
}

const getTags = (list: string[]) => {
    const tagList = list.map((element) => (
        <label className="tag" key={element}>{element}</label>
    ));

    return tagList;
}

function Vipps() {
    if (project !== undefined) {
        return (
            <main id="vipps" className="main-project" style={setBackground(project.color)}>
                <Hero image={project.image} color={project.color} height="100" gradient="bottom">
                    <article className="contain">
                        <h1>{project.workplace}</h1>
                        <Grid>{getTags(project.tags)}</Grid>
                    </article>
                </Hero>
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