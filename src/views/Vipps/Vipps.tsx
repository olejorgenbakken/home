import Button from "../../components/button/Button";
import { vipps } from "../../assets/data/projects";

import './vipps.css';
import Hero from "../../components/hero/hero";
import Grid from "../../components/layout/grid/grid";
import { contrast } from "../../assets/functions";

const setBackground = (color: string) => {
    let style = {
        color: contrast(color),
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
    return (
        <main id="vipps" className="main-project" style={setBackground(vipps.color)}>
            <Hero image={vipps.image} color={vipps.color} height="100" gradient="bottom">
                <article className="contain project-header">
                    <h1>{vipps.workplace}</h1>
                    <Grid align="center">{getTags(vipps.tags.prototyping)}</Grid>
                </article>
            </Hero>
            <section className="contain">
                <h2>Problemstilling</h2>
                <p>{vipps.task}</p>
            </section>

            <section className="project-footer">
                <header>
                    <h2>Takk for at du sjekket ut dette prosjektet!</h2>
                    <p>Se på noe annet her:</p>
                </header>
                <Button link="/prosjekter">Til alle prosjekter</Button>
            </section>
        </main>
    )
}

export default Vipps;