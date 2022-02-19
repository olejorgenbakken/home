import { ReactNode } from "react";
import "./kort.css";

interface Props {
    farge?: "grå" | "hvit" | "svart",
    bilde?: string,
    href?: string,
    children: ReactNode
}

const Kort = ({ farge, href, bilde, children }: Props) => {
    const hentBilde = (bilde?: string) => {
        if (bilde) {
            return (
                <figure className="bilde"><img src={bilde} alt="" /></figure>)
        }
    }

    if (href) {
        return (
            <a className={`kort ${farge} lenke`} href={href} >
                {hentBilde(bilde)}
                <section className="innhold">
                    {children}
                </section>
            </a >
        );
    }

    else {
        return (
            <article className={`kort ${farge}`}>
                {hentBilde(bilde)}
                <section className="innhold">
                    {children}
                </section>
            </article>
        );
    }
}

export default Kort;
