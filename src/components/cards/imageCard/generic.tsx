import { Link } from "react-router-dom";
import './generic.css';
import { ReactNode } from "react";

interface Props {
    link?: string,
    color?: any,
    image?: string,
    children: ReactNode
}

const setStyle = (color: string) => {
    let style = {
        background: color,
    }
    return style;
}

const setImg = (src?: string) => {
    if (src !== undefined) {
        return (
            <figure className="card-image">
                <img src={src} alt="" />
            </figure>
        )
    } else {
        return null
    }
}

function Card({ link, children, image, color }: Props) {
    if (link !== undefined) {
        return (
            <Link to={`${process.env.PUBLIC_URL}/prosjekter/${link.toLocaleLowerCase()}`} className="card" style={setStyle(color)}>
                {setImg(image)}
                <article className="card-content">
                    {children}
                </article>
            </Link >
        )
    } else {
        return (
            <article className="card" style={setStyle(color)}>
                {setImg(image)}
                <article className="card-content">
                    {children}
                </article>
            </article >
        )
    }
}

export default Card;