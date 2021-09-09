import { Component } from "react";
import "./hero.css";

interface Props {
  background?: 'gradient',
  content: {
    heading?: {
      level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
      title: string
    }
    description?: string
  }
}

class Hero extends Component<Props> {
  setHeading() {
    if (this.props.content.heading != undefined) {
      switch (this.props.content.heading.level) {
        case 'h1':
          return (<h1>{this.props.content.heading.title}</h1>);
        case 'h2':
          return (<h2>{this.props.content.heading.title}</h2>);
        case 'h3':
          return (<h3>{this.props.content.heading.title}</h3>);
        case 'h4':
          return (<h4>{this.props.content.heading.title}</h4>);
        case 'h5':
          return (<h5>{this.props.content.heading.title}</h5>);
        default:
          break;
      }
    } else {
      return null;
    }
  }

  setDescription() {
    if (this.props.content.description) {
      return (<p>{this.props.content.description}</p>)
    } else {
      return null
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
        return style;

      default:
        break;
    }
  }

  render() {
    return (
      <section className={`hero`} style={this.setStyle()}>
        <article>
          {this.setHeading()}
          {this.setDescription()}
        </article>
      </section>
    );
  }
}

export default Hero;
