import { Component } from "react";
import { Link } from "react-router-dom";

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
                    <Link to={this.props.link}><button>{this.props.linkTitle}</button></Link>
                </article>
            </main>
        );
    }
}

export default NotFound;
