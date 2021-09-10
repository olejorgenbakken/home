import { Link } from "react-router-dom";
import './generic.css';

import { contrast } from '../../../assets/functions';
import Heading from "../../text/heading/heading";
import Paragraph from "../../text/paragraph/Paragraph";

interface HeadingProps {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    text: string
}

interface Props {
    link?: string,
    color?: any,
    heading?: HeadingProps,
    description?: string,
    image?: string,
    imageHeight?: string,
}

const setStyle = (color: string) => {
    let style = {
        background: color,
    }
    return style;
}

const setImg = (src?: string, height?: string,) => {
    let style = {
        height: height + "px"
    }

    if (src !== undefined) {
        return (
            <figure className="card-image" style={style}>
                <img src={src} />
            </figure>
        )
    } else {
        return null
    }
}

const setContent = (heading?: HeadingProps, description?: string, color?: string) => {
    if (heading && description) {
        return (
            <section className="card-content" style={contrast(color)}>
                <Heading level={heading?.level} text={heading?.text} />
                <Paragraph text={description} />
            </section>
        )
    } else if (heading) {
        return (
            <section className="card-content" style={contrast(color)}>
                <Heading level={heading?.level} text={heading?.text} />
            </section>
        )
    } else if (description) {
        return (
            <section className="card-content" style={contrast(color)}>
                <Paragraph text={description} />
            </section>
        )
    } else {
        return null
    }
}

function Card({ link, heading, description, image, imageHeight, color }: Props) {
    if (link !== undefined) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/prosjekter/${link.toLocaleLowerCase()}`} className="card" style={setStyle(color)}>
                {setImg(image, imageHeight)}
                {setContent(heading, description, color)}
            </Link >
        )
    } else {
        return (
            <article className="card" style={setStyle(color)}>
                {setImg(image, imageHeight)}
                {setContent(heading, description, color)}
            </article >
        )
    }
}

export default Card;