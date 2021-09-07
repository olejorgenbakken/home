import { Component } from "react";
import { Link } from "react-router-dom";
import './project.css'

interface Props {
    href: string,
    title: string,
    year: number,
    role: string,
    cover?: string,
    color: string
}

class ProjectCard extends Component<Props> {
    setStyle() {
        let style = {
            background: this.props.color,
        }

        return style;
    }


    lightOrDark(color: any) {
        let style = {
            color: '',
        }

        var r, g, b, hsp;
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;

        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        if (hsp > 127.5) {
            style.color = '#111111';
            return style;
        }
        else {
            style.color = '#ffffff';
            return style;
        }
    }

    getImg() {
        let style = {
            backgroundImage: `url(${this.props.cover}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        if (this.props.cover) {
            return (
                <section className="card-image" style={style}></section>
            )
        } else {
            return null
        }

    }

    getContent() {
        return (
            <section className="card-content">
                <h2 style={this.lightOrDark(this.props.color)}>{this.props.title}</h2>
                <p style={this.lightOrDark(this.props.color)}>{this.props.role}</p>
            </section>)
    }

    render() {
        return (
            <Link to={`prosjekter/${this.props.href.toLocaleLowerCase()}`} title={`Gå til ${this.props.title}`} className="card card-project" style={this.setStyle()}>
                {this.getContent()}
                {this.getImg()}
            </Link >
        )
    }
}

export default ProjectCard;