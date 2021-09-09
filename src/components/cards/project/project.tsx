import { Component } from "react";
import { Link } from "react-router-dom";
import './project.css'

interface Props {
    link?: string,
    heading: string,
    description?: string,
    image?: string,
    color?: string
}

class Project extends Component<Props> {
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
            backgroundImage: `url(${this.props.image}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        if (this.props.image) {
            return (
                <section className="card-image" style={style}></section>
            )
        } else {
            return null
        }

    }

    getContent() {
        if (this.props.description) {
            return (
                <section className="card-content" style={this.lightOrDark(this.props.color)}>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                </section>
            )
        } else {
            return (
                <section className="card-content" style={this.lightOrDark(this.props.color)}>
                    <h2>{this.props.heading}</h2>
                </section>
            )
        }

    }

    render() {
        if (this.props.link) {
            return (
                <Link to={`${process.env.PUBLIC_URL}/prosjekter/${this.props.link.toLocaleLowerCase()}`} title={`Gå til ${this.props.heading}`} className="card card-project" style={this.setStyle()}>
                    {this.getContent()}
                    {this.getImg()}
                </Link >
            )
        } else {
            return (
                <article className="card card-project" style={this.setStyle()}>
                    {this.getContent()}
                    {this.getImg()}
                </article >
            )
        }
    }
}

export default Project;