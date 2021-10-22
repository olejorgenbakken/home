import { ReactNode } from "react";
import Sidetittel from "../../components/Sidetittel/Sidetittel";

import './Feilside.css';

import katt from '../../assets/404.gif';

interface Props {
    children: ReactNode
}

const Feilside = ({ children }: Props) => {
    return (
        <main id="feilside" className="gap-2">
            <Sidetittel tittel="404" beskrivelse="Her var det ingenting... 😞" bilde={katt} />
            <article className="innhold">
                {children}
            </article>
        </main>
    );
}

export default Feilside;
