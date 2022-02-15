import "./kort.css";
import { ReactNode } from "react";

interface Props {
    tittel: String,
    children?: ReactNode
}

const Kort = ({ tittel, children }: Props) => {
    return (
        <article className="kort">
            <h2>{tittel}</h2>
            {children}
        </article >
    );
}

export default Kort;
