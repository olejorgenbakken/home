import { ReactNode } from "react";
import Sidetittel from "../../components/Sidetittel/Sidetittel";

import './Feilside.css';

interface Props {
    feilkode: string,
    forklaring: string,
    children: ReactNode
}

const Feilside = ({ feilkode, forklaring, children }: Props) => {
    return (
        <main id="feilside" className="gap-2">
            <Sidetittel tittel={feilkode} beskrivelse={forklaring} />
            <section className="innhold">
                {children}
            </section>
        </main>
    );
}

export default Feilside;
