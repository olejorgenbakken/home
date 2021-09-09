import { Component } from "react";
import "./hero.css";

interface Props {
  background?: 'gradient',
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  headingTitle: string
  description?: string
}

class Hero extends Component<Props> {
  setHeading() {
    switch (this.props.headingLevel) {
      case 'h1':
        return (<h1>{this.props.headingTitle}</h1>);
      case 'h2':
        return (<h2>{this.props.headingTitle}</h2>);
      case 'h3':
        return (<h3>{this.props.headingTitle}</h3>);
      case 'h4':
        return (<h4>{this.props.headingTitle}</h4>);
      case 'h5':
        return (<h5>{this.props.headingTitle}</h5>);
      default:
        break;
    }
  }

  setDescription() {
    if (this.props.description) {
      return (<p>{this.props.description}</p>)
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
