import { Component } from "react";
import "./hero.css";

interface Props {
  backgroundImage?: string,
  content: {
    heading: string,
    text: string
  }
}

class Hero extends Component<Props> {
  render() {
    return (
      <section className="hero">
        <article className="width-1000">
          <h2>{this.props.content.heading}</h2>
          <p>{this.props.content.text}</p>
        </article>
      </section>
    );
  }


}

export default Hero;
