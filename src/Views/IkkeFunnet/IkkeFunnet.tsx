import { ReactNode } from "react";

import './IkkeFunnet.css';

interface Props {
    error: number,
    message: string,
    children: ReactNode
}

const IkkeFunnet = ({ error, message, children }: Props) => {
    return (
        <main className="not-found">
            <article className="  paddinggap-2">
                <header>
                    <h1>{error}</h1>
                    <p>{message}</p>
                </header>
                {children}
            </article>
        </main>
    );
}

export default IkkeFunnet;
