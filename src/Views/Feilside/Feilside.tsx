import { ReactNode } from "react";
import Sidetittel from "../../components/Sidetittel/Sidetittel";

import './Feilside.css';

interface Props {
    children: ReactNode
}

const Feilside = ({ children }: Props) => {
    return (
        <main id="feilside">
            <article className="gap-2">
                <section>
                    <h1>Oida...</h1>
                    <p>Her var det ingenting :(</p>
                </section>
                {children}
            </article>
        </main>
    );
}

export default Feilside;
