import { Link } from "react-router-dom";
import { ReactNode } from "react";

import './card.css';
import { contrast } from "../../assets/functions";

interface Props {
    link?: string,
    color?: any,
    image?: string,
    type: 'default' | 'large',
    children: ReactNode
}

const setStyle = (color: string) => {
    let style = {
        background: color,
        color: contrast(color)
    }
    return style;
}

const setImg = (image?: string) => {
    if (image !== undefined) {
        return (
            <figure className="card-image">
                <img src={image} alt="" />
            </figure>
        )
    } else {
        return null
    }
}

function Card({ type, link, children, image, color }: Props) {
    if (link !== undefined) {
        if (link.includes('https://')) {
            return (
                <a href={link} className={`card card-${type} card-link`} style={setStyle(color)}>
                    {setImg(image)}
                    <article className="card-content">
                        {children}
                    </article>
                </a >
            )
        } else {
            return (
                <Link to={link} className={`card card-${type} card-link`} style={setStyle(color)}>
                    {setImg(image)}
                    <article className="card-content">
                        {children}
                    </article>
                </Link >
            )
        }
    } else {
        return (
            <article className={`card card-${type}`} style={setStyle(color)}>
                {setImg(image)}
                <article className="card-content">
                    {children}
                </article>
            </article >
        )
    }
}

export default Card;