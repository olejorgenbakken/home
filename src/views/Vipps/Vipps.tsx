import Button from "../../components/button/Button";
import { vipps } from "../../assets/data/projects";

import './vipps.css';
import Hero from "../../components/hero/hero";
import Pie from "../../components/charts/pie";
import Card from "../../components/card/card";
import Gallery from "../../components/gallery/gallery";

const getTags = (list: string[]) => {
    const tagList = list.map((element) => (
        <label className="tag" key={element}>{element}</label>
    ));

    return tagList;
}

const getTests = (tests: { title: string, type: string, findings: string[] }[]) => {
    const testArticles = tests.map(test => {
        return (
            <article>
                <header className="contain">
                    <h3>{test.title}</h3>
                    <label>{test.type}</label>
                </header>
                <ul className="findings contain">{test.findings.map(finding => {
                    return (<li>{finding}</li>)
                })}</ul>
                <Gallery type="grid" columns='5'>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                </Gallery>

            </article>
        )
    })
    return testArticles;
}

function Vipps() {
    return (
        <div id="vipps">
            <Hero image={vipps.cover} color={vipps.business.color.primary} height="100" gradient="bottom">
                <article className="contain project-header">
                    <h1>{vipps.business.name}</h1>
                    <Gallery type="grid" columns='1' align="center">{getTags(vipps.tags.prototyping)}</Gallery>
                </article>
            </Hero>
            <main className="main-project">
                <section className="contain task">
                    <h2>Problemstilling</h2>
                    <p>{vipps.data.task}</p>
                </section>

                <section className="flow testing">
                    <header className="contain">
                        <h2>Tester</h2>
                    </header>
                    <section className="tests">
                        {getTests(vipps.data.research.tests)}
                    </section>
                </section>
                <Gallery type="row" columns="2">
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card><Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card><Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card><Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                    <Card>
                        <Pie amount={55}></Pie>
                        <p>Hadde brukt vipps i forbindelse med veldedighet før</p>
                    </Card>
                </Gallery>

                <section className="project-footer">
                    <header>
                        <h2>Takk for at du sjekket ut dette prosjektet!</h2>
                        <p>Se på noe annet her:</p>
                    </header>
                    <Button link="/prosjekter">Til alle prosjekter</Button>
                </section>
            </main>
        </div>
    )
}

export default Vipps;