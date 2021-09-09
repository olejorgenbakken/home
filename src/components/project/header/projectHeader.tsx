import { Component } from "react";
import TagList from "../tags/tagList/tagList";

import './projectHeader.css';

interface Props {
    text: {
        heading: string,
        subheading?: string
    }
    tags?: Array<string>,
    background?: string,
    color?: string
}

class ProjectHeader extends Component<Props> {

    getContent() {
        if (this.props.text.subheading) {
            return (
                <section className="opening">
                    <h1 className="title">{this.props.text.heading}</h1>
                    <p className="role">{this.props.text.subheading}</p>
                </section>
            )
        } else {
            return (
                <section className="opening">
                    <h1 className="title">{this.props.text.heading}</h1>
                </section>
            )
        }

    }

    setBackground() {
        if (this.props.background) {
            let bg = this.props.background;

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
        } else {
            return undefined;
        }

    }

    setGradient() {
        if (this.props.color) {
            let color = this.props.color;
            let gradient = {
                background: `linear-gradient(180deg,${color}aa 0%, ${color}cc 30%, ${color} 100%)`,
            }
            return (<section className="gradient" style={gradient}></section>)
        } else {
            return null;
        }
    }

    getTags() {
        if (this.props.tags) {
            return (<TagList tags={this.props.tags} />)
        } else {
            return null;
        }
    }

    render() {
        return (
            <header className="project-header" style={this.setBackground()}>
                {this.setGradient()}
                <article className="project-header-content">
                    {this.getContent()}
                    {this.getTags()}
                </article>
            </header>
        )
    }
}

export default ProjectHeader;