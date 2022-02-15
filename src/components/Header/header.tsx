import "./header.css";
import { ReactNode } from "react";

interface Props {
    tittel: String,
    children?: ReactNode
}

const Header = ({ tittel, children }: Props) => {
    return (
        <header className="overskrift">
            <h1>{tittel}</h1>
            {children}
        </header >
    );
}

export default Header;
