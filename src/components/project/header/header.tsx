import { Component } from "react";
import Grid from "../../grid/grid";

import './header.css';

interface Props {
    text: {
        heading: string,
        subheading: string
    }
    tags?: Array<string>,
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
        let gradient = {
            background: `linear-gradient(180deg, ${color}aa 0%, ${color} 80%)`,
        }
        return (<section className="gradient" style={gradient}></section>)
    }

    getTags() {
        if (this.props.tags != undefined) {
            const tags = this.props.tags.map((tag) => (
                <p>{tag}</p>
            ));
            return <Grid elements={tags} styling={{ width: "contained", align: "center" }} />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <header className="project-header" style={this.setBackground(this.props.background)}>
                {this.setGradient(this.props.color)}
                <article className="project-header-content">
                    <h1>{this.props.text.heading}</h1>
                    <p className="role">{this.props.text.subheading}</p>
                    {this.getTags()}
                </article>
            </header>
        )
    }
}

export default ProjectHeader;