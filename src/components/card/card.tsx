import { Link } from "react-router-dom";
import { ReactNode } from "react";

import './card.css';

interface Props {
    image?: string,
    href: string,
    children: ReactNode
}

function Card({ href, image, children }: Props) {
    if (href.includes('http')) {
        return (
            <a href={href} className='card card-link flex-column'>
                <figure className="card-image">
                    <img src={image} alt="" />
                </figure>
                <section className="card-content flex-column">
                    {children}
                </section>
            </a >
        )
    } else {
        return (
            <Link to={href} className='card card-link flex-column'>
                <figure className="card-image">
                    <img src={image} alt="" />
                </figure>
                <section className="card-content flex-column">
                    {children}
                </section>
            </Link >
        )
    }

}

export default Card;