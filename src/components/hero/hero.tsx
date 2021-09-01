import { Component } from "react";
import "./hero.css";

interface Props {
  background: 'none' | 'gradient' | 'image',
  size?: 'default' | 'xl',
  image?: string,
  content: {
    heading: string,
    text: string
  }
}

class Hero extends Component<Props> {
  render() {

    switch (this.props.background) {
      case 'gradient':
        return (
          <section className={`hero hero-${this.props.size} hero-${this.props.background}`}>
            <article className="width-1000">
              <h2>{this.props.content.heading}</h2>
              <p>{this.props.content.text}</p>
            </article>
          </section>
        );

      case 'image':
        const styles = {
          constainer: {
            backgroundImage: `url(${this.props.image})`
          }
        }

        return (
          <section className={`hero hero-${this.props.size} hero-${this.props.background}`} style={styles.constainer}>
            <article className="width-1000">
              <h2>{this.props.content.heading}</h2>
              <p>{this.props.content.text}</p>
            </article>
          </section>
        );


      default:
        return (
          <section className={`hero hero-${this.props.size} `}>
            <article className="width-1000">
              <h2>{this.props.content.heading}</h2>
              <p>{this.props.content.text}</p>
            </article>
          </section>
        );
    }
  }


}

export default Hero;
