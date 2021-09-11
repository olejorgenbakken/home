import { Link } from "react-router-dom";
import './project.css'
import { ReactNode } from "react";
import { contrast } from "../../../assets/functions";

interface Props {
    link?: string,
    color?: any,
    image?: string,
    children: ReactNode
}

const setStyle = (color: any) => {
    let style = {
        background: color,
        color: contrast(color)
    }
    return style;
}

const setImg = (image?: string) => {
    if (image) {
        let style = {
            backgroundImage: `url(${image}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        return (
            <section className="card-image" style={style}></section>
        )
    } else {
        return null
    }
}

function ProjectCard({ link, image, children, color }: Props) {
    if (link !== undefined) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/prosjekter/${link.toLocaleLowerCase()}`} className="card card-project" style={setStyle(color)}>
                <section className="card-content">
                    {children}
                </section>
                {setImg(image)}
            </Link >
        )
    } else {
        return (
            <article className="card card-project" style={setStyle(color)}>
                <section className="card-content">
                    {children}
                </section>
                {setImg(image)}
            </article >
        )
    }
}

export default ProjectCard;