import { Component } from "react";
import { Link } from "react-router-dom";

import './button.css';

interface Props {
    text: string,
    link?: string
}

class GenericButton extends Component<Props> {
    render() {
        if (this.props.link) {
            return (
                <Link to={this.props.link}>
                    <button className="button link-button">{this.props.text}</button>
                </Link>
            )

        } else {
            return (<button className="button">{this.props.text}</button>)
        }
    }
}

export default GenericButton;