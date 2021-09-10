import Button from "../../components/buttons/generic/Button";
import Heading from "../../components/text/heading/heading";

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
                <Heading level="h1" text="404" />
                <Heading level="h2" text={message} />
                <Button link={link} text={linkTitle} />
            </article>
        </main>
    );
}

export default NotFound;
