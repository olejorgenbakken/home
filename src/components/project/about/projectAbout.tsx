import './projectAbout.css';

interface Props {
    task: string,
    background: string
}

const ProjectAbout = ({ task, background }: Props) => {
    return (
        <section className="flex-column constrain padding gap-2">
            <header>
                <h2>Om prosjektet</h2>
            </header>

            <article>
                <h3>Problemstilling</h3>
                <p>{task}</p>
            </article>

            <article>
                <h3>Bakgrunn</h3>
                <p>{background}</p>
            </article>
        </section>
    )
}

export default ProjectAbout;