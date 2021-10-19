import Button from "../button/Button";

import './projectItem.css'

interface Props {
    image: string,
    label?: string,
    title: string,
    href: string
}

const ProjectItem = ({ image, title, href, label }: Props) => {
    return (
        <article className="project-item flex-column gap-2 constrain padding">
            <img src={image} alt="" />
            <section>
                <label>{label}</label>
                <h2>{title}</h2>
            </section>
            <Button href={href}>Se prosjektet</Button>
        </article>
    )
}

export default ProjectItem;