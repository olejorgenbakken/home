import { Component } from "react";

import './paragraph.css';

interface Props {
    content: {
        heading?: { level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', text: string },
        paragraph: string,
    }
    styling?: {
        align: 'left' | 'center',
        color: string,
    }
}

class Paragraph extends Component<Props> {

    setStyle() {
        let chosenAlignment = this.props.styling?.align;
        let chosenColor = this.props.styling?.color;

        let style = {
            textAlign: chosenAlignment,
            color: chosenColor,
        }

        return style;
    }

    getHeading() {
        if (this.props.content.heading !== undefined) {
            let level = this.props.content.heading.level;
            let text = this.props.content.heading.text;

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
            <section className="paragraph" style={this.setStyle()}>
                {this.getHeading()}
                <p>{this.props.content.paragraph}</p>
            </section>
        )
    }
}

export default Paragraph;