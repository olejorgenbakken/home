import Button from "../../components/buttons/generic/Button";

import './not-found.css';

interface Props {
    message: string,
    link: string
    linkTitle: string
}

function NotFound({ message, link, linkTitle }: Props) {
    return (
        <main id="not-found">
            <article>
                <h1>404</h1>
                <h2>{message}</h2>
                <Button link={link}>{linkTitle}</Button>
            </article>
        </main>
    );
}

export default NotFound;
