import { Component } from "react";
import { Link } from "react-router-dom";
import './project.css'

interface Props {
    link?: string,
    color?: string,
    content: {
        text: {
            heading?: {
                level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
                title: string
            }
            description?: string,
        },
        image?: string,
    }
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

        if (hsp > 160.5) {
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
            backgroundImage: `url(${this.props.content.image}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        if (this.props.content.image) {
            return (
                <section className="card-image" style={style}></section>
            )
        } else {
            return null
        }

    }

    setHeading() {
        if (this.props.content.text.heading) {
            switch (this.props.content.text.heading.level) {
                case 'h1':
                    return (<h1>{this.props.content.text.heading.title}</h1>);
                case 'h2':
                    return (<h2>{this.props.content.text.heading.title}</h2>);
                case 'h3':
                    return (<h3>{this.props.content.text.heading.title}</h3>);
                case 'h4':
                    return (<h4>{this.props.content.text.heading.title}</h4>);
                case 'h5':
                    return (<h5>{this.props.content.text.heading.title}</h5>);
                default:
                    break;
            }
        } else {
            return null;
        }
    }

    setParagraph() {
        if (this.props.content.text.description) {
            return (<p>{this.props.content.text.description}</p>)
        } else {
            return null;
        }
    }

    getContent() {
        return (
            <section className="card-content" style={this.lightOrDark(this.props.color)}>
                {this.setHeading()}
                {this.setParagraph()}
            </section>
        )
    }

    render() {
        if (this.props.link != undefined) {
            return (
                <Link to={`${process.env.PUBLIC_URL}/prosjekter/${this.props.link.toLocaleLowerCase()}`} title={`Gå til ${this.props.content.text.heading}`} className="card card-project" style={this.setStyle()}>
                    <section className="card-content" style={this.lightOrDark(this.props.color)}>
                        {this.getContent()}
                    </section>
                    {this.getImg()}
                </Link >
            )
        } else {
            return (
                <article className="card card-project" style={this.setStyle()}>
                    <section className="card-content" style={this.lightOrDark(this.props.color)}>
                        {this.getContent()}
                    </section>
                    {this.getImg()}
                </article >
            )
        }
    }
}

export default Project;