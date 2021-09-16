import Button from "../../button/Button";
import './projectFooter.css';

const ProjectFooter = () => {
    return (
        <section className="project-footer">
            <header>
                <h2>Takk for at du sjekket ut dette prosjektet!</h2>
                <p>Se på noe annet her:</p>
            </header>
            <Button link="/prosjekter">Til alle prosjekter</Button>
        </section>
    )
}

export default ProjectFooter;