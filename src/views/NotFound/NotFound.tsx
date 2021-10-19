import { ReactNode } from "react";
import Button from "../../components/button/Button";

import './not-found.css';

interface Props {
    error: number,
    message: string,
    children: ReactNode
}

const NotFound = ({ error, message, children }: Props) => {
    return (
        <main className="not-found">
            <article className="flex-column constrain padding gap-2">
                <header>
                    <h1>{error}</h1>
                    <p>{message}</p>
                </header>
                {children}
            </article>
        </main>
    );
}

export default NotFound;
