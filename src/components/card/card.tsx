import React, { Component } from "react";
import "./card.css";

interface Props {
  backgroundColor: string,
  content: {
    image: {
      src: string,
      altText: string
    },
    text: {
      description: string,
      link: {
        href: string,
        title: string
      }
    }
  }
}

class Card extends Component<Props> {
  render() {
    if (this.props.content.text) {
      return (
        <article className="card external-item">
          <section className="card-image">
            <img src={this.props.content.image.src} alt={this.props.content.image.altText} />
          </section>
          <section className="card-content">
            <p>{this.props.content.text.description}</p>
            <a href={this.props.content.text.link.href} title={"Gå til " + this.props.content.text.link.title}>
              {this.props.content.text.link.title}
            </a>
          </section>
        </article >
      )
    } else {
      return (
        <article className="card external-item">
          <section className="card-image">
            <img src={this.props.content.image.src} alt={this.props.content.image.altText} />
          </section>
        </article >
      )
    }
  }
}

export default Card;