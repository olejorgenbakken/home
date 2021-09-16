import Button from "../../button/Button";
import './projectFooter.css';

const ProjectFooter = () => {
    return (
        <section className="project-footer flex-column gap-2">
            <header className="flex-column">
                <h2>Takk for at du sjekket ut dette prosjektet!</h2>
            </header>
            <Button link="/prosjekter">Se alle prosjekter</Button>
        </section>
    )
}

export default ProjectFooter;