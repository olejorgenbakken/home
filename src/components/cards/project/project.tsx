import { Link } from "react-router-dom";
import './project.css'

import { contrast } from '../../../assets/functions';
import Heading from "../../text/heading/heading";
import Paragraph from "../../text/paragraph/Paragraph";

interface HeadingProps {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    text: string
}

interface Content {
    text: {
        heading: HeadingProps,
        description: string
    },
    image?: string
}

interface Props {
    link?: string,
    color?: any,
    content: Content
}

const setStyle = (color: string) => {
    let style = {
        background: color,
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

const setContent = ({ text }: Content, color: string) => {
    return (
        <section className="card-content" style={contrast(color)}>
            <Heading level={text.heading.level} text={text.heading.text} />
            <Paragraph text={text.description} />
        </section>
    )
}

function Project({ link, content, color }: Props) {
    if (link !== undefined) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/prosjekter/${link.toLocaleLowerCase()}`} title={`Gå til ${content.text.heading.text}`} className="card card-project" style={setStyle(color)}>
                {setContent(content, color)}
                {setImg(content.image)}
            </Link >
        )
    } else {
        return (
            <article className="card card-project" style={setStyle(color)}>
                {setContent(content, color)}
                {setImg(content.image)}
            </article >
        )
    }
}

export default Project;