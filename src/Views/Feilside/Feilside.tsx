import { ReactNode } from "react";
import Sidetittel from "../../components/Sidetittel/Sidetittel";

import './Feilside.css';

interface Props {
    children: ReactNode
}

const Feilside = ({ children }: Props) => {
    return (
        <main id="feilside" className="gap-2">
            <Sidetittel tittel="Oida..." beskrivelse="Her var det ingenting" />
            <article>
                {children}
            </article>
        </main>
    );
}

export default Feilside;
