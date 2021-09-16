import { Link } from "react-router-dom";
import { ReactNode } from "react";

import './card.css';

interface Props {
    link?: string,
    image?: string,
    large?: boolean,
    children: ReactNode
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

function Card({ large, link, image, children }: Props) {
    if (link !== undefined) {
        if (link.includes('https://')) {
            return (
                <a href={link} className='card card-link flex-column' data-large={large}>
                    {setImg(image)}
                    <article className="card-content flex-column">
                        {children}
                    </article>
                </a >
            )
        } else {
            return (
                <Link to={link} className='card card-link flex-column' data-large={large}>
                    {setImg(image)}
                    <article className="card-content flex-column">
                        {children}
                    </article>
                </Link >
            )
        }
    } else {
        return (
            <article className='card flex-column' data-large={large}>
                {setImg(image)}
                <article className="card-content flex-column">
                    {children}
                </article>
            </article >
        )
    }
}

export default Card;