import { Component } from "react";
import Grid from "../../grid/grid";

import './header.css';

interface Props {
    text: {
        heading: string,
        subheading: string
    }
    background: string,
    color: string
}

class ProjectHeader extends Component<Props> {
    setBackground(bg: string) {
        let style = {
            background: bg,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        };
        if (bg.includes(".")) {
            style.background = `url(${bg})`;
            return style;
        }
        return style;
    }

    setGradient(color: string) {
        console.log(color)
        let gradient = {
            background: `linear-gradient(180deg, ${color}aa 0%, ${color} 90%)`,
        }
        return (<section className="gradient" style={gradient}></section>)
    }

    render() {
        return (
            <header className="project-header" style={this.setBackground(this.props.background)}>
                {this.setGradient(this.props.color)}
                <article className="project-header-content">
                    <h1>{this.props.text.heading}</h1>
                    <p>{this.props.text.subheading}</p>
                </article>
            </header>
        )
    }
}

export default ProjectHeader;