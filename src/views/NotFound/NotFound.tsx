import Button from "../../components/button/Button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import './not-found.css';

interface Props {
    message: string,
    link: string
    linkTitle: string
}

function NotFound({ message, link, linkTitle }: Props) {
    return (
        <div>
            <Header position="absolute" />
            <main id="not-found" className="flex-column">
                <article className="flex-column gap-4">
                    <header>
                        <h1>404</h1>
                        <p>{message}</p>
                    </header>
                    <Button link={link}>{linkTitle}</Button>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;
