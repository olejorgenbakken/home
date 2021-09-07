import { Component } from "react";
import "./hero.css";

interface Props {
  background: 'default' | 'gradient',
  heading?: {
    level: string
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5',
    title: string
  },
  description?: string
}

class Hero extends Component<Props> {
  setHeading() {
    switch (this.props.heading?.level) {
      case 'h1':
        return (<h1>{this.props.heading.title}</h1>);
      case 'h2':
        return (<h2>{this.props.heading.title}</h2>);
      case 'h3':
        return (<h3>{this.props.heading.title}</h3>);
      case 'h4':
        return (<h4>{this.props.heading.title}</h4>);
      case 'h5':
        return (<h5>{this.props.heading.title}</h5>);
      default:
        break;
    }
  }

  setStyle() {
    let style = {
    }

    switch (this.props.background) {
      case 'gradient':
        style = {
          background: `linear-gradient(0deg, var(--background) 0%, var(--background-darker) 50%, var(--background) 100%)`
        }
        return style

      default:
        break;
    }
  }

  render() {
    return (
      <section className={`hero`} style={this.setStyle()}>
        <article>
          {this.setHeading()}
          <p>{this.props.description}</p>
        </article>
      </section>
    );
  }
}

export default Hero;
