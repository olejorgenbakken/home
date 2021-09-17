import ProjectsList from "../../components/project/projectsList/projectsList";

import './Projects.css';

const Projects = () => {
    return (
        <main id="projects" className="flex-column gap-2">
            <header className="projects-header constrain padding">
                <h1>Prosjekter</h1>
            </header>
            <ProjectsList />
        </main>
    );
}

export default Projects;
