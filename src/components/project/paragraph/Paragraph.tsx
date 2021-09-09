import { Component } from "react";

import './paragraph.css';

interface Props {
    heading?: { level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', text: string },
    paragraph: string,
    color: string
}

class Paragraph extends Component<Props> {

    setColor() {
        let style = {
            color: this.props.color
        }

        return style;
    }

    getHeading() {
        if (this.props.heading !== undefined) {
            let level = this.props.heading.level;
            let text = this.props.heading.text;

            switch (level) {
                case 'h1':
                    return (<h1>{text}</h1>);
                case 'h2':
                    return (<h2>{text}</h2>);
                case 'h3':
                    return (<h3>{text}</h3>);
                case 'h4':
                    return (<h4>{text}</h4>);
                case 'h5':
                    return (<h5>{text}</h5>);

                default:
                    return null;
            }
        }
    }

    render() {
        return (
            <section className="paragraph" style={this.setColor()}>
                {this.getHeading()}
                <p>{this.props.paragraph}</p>
            </section>
        )
    }
}

export default Paragraph;