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
            <main id="not-found">
                <article>
                    <h1>404</h1>
                    <h2>{message}</h2>
                    <Button link={link}>{linkTitle}</Button>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;
