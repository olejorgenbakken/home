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
        <main className="gap-2">
            <Sidetittel tittel={feilkode} beskrivelse={forklaring} />
            <section>
                {children}
            </section>
        </main>
    );
}

export default Feilside;
