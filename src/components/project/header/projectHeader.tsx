import Hero from "../../hero/hero"
import './projectHeader.css';

interface Props {
    backgroundImage: string,
    gradientColor: string,
    logo: string,
    business: string,
    title: string
}

const ProjectHeader = ({ backgroundImage, gradientColor, logo, business, title }: Props) => {
    return (
        <Hero image={backgroundImage} color={gradientColor} gradient="bottom" height="80">
            <article className="project-header flex-column gap-2">
                <img src={logo} alt={`${business} logo`} />
                <h1>{title}</h1>
            </article>
        </Hero>
    )
}

export default ProjectHeader;