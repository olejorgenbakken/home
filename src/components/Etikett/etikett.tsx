import { ReactNode } from "react";
import "./etikett.css";

interface Props {
    farge?: "rød" | "blå" | "grønn" | "gul" | "oransj",
    children: ReactNode
}

const Etikett = ({ farge, children }: Props) => {
    return (
        <label className={`etikett ${farge}`}>
            {children}
        </label>
    );
}

export default Etikett;
