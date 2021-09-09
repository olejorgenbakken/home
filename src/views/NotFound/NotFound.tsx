import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

import './not-found.css';

interface Props {
    message: string,
    link: string
    linkTitle: string
}

class NotFound extends Component<Props> {
    render() {
        return (
            <main id="not-found">
                <article>
                    <h1>404</h1>
                    <h2>{this.props.message}</h2>
                    <Button link={this.props.link} text={this.props.linkTitle} />
                </article>
            </main>
        );
    }
}

export default NotFound;
