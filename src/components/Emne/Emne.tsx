import { ReactNode } from "react";

import './Emne.css';

interface Props {
    tekst: string
}

const Emne = ({ tekst }: Props) => {
    return (
        <label className="emne">{tekst}</label>
    )
}

export default Emne;