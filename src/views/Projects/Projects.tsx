import projects from '../../assets/data/projects';
import ProjectItem from '../../components/project/projectItem/projectItem';
import './Projects.css';

const externalList = projects.map((project) => (
    <ProjectItem key={project.slug} href={`prosjekter/${project.slug}`} image={project.images.cover} label={project.role} title={project.data.task} />
));

const Projects = () => {
    return (
        <main id="projects" className="flex-column gap-2">
            <header className="constrain padding">
                <h1>Prosjekter</h1>
            </header>

            <section className="flex-column gap-2">
                {externalList}
            </section>
        </main>
    );
}

export default Projects;
