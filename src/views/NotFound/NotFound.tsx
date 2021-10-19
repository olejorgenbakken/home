import Button from "../../components/button/Button";

import './not-found.css';

const NotFound = () => {
    return (
        <main id="not-found" className="flex-column">
            <article className="flex-column gap-2">
                <header>
                    <h1>404</h1>
                    <p>Denne siden ekisterer ikke</p>
                </header>
                <Button href="/">Gå til hovedsiden</Button>
            </article>
        </main>
    );
}

export default NotFound;
