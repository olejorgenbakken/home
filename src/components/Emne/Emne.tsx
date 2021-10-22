import { ReactNode } from "react";

import './Emne.css';

interface Props {
    children: ReactNode
}

const Emne = ({ children }: Props) => {
    return (
        <article className="emne">{children}</article>
    )
}

export default Emne;