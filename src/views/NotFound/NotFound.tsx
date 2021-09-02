import { Component } from "react";

import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <main className="header-padding padding" id="not-found">
                <article>
                    <h1>404</h1>
                    <h2>Denne siden ekisterer ikke (ennå)</h2>
                </article>
            </main>
        );
    }
}

export default NotFound;
