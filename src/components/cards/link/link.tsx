import React, { Component } from "react";
import './link.css'

interface Props {
  image?: string,
  text?: string
  href: string
}

class LinkCard extends Component<Props> {
  render() {
    if (this.props.image !== undefined) {
      return (
        <a className="card card-link" href={this.props.href} title={`Gå til ${this.props.text}`}>
          <section className="card-image">
            <img src={this.props.image} alt={this.props.image} />
          </section>
          <section className="card-content">
            <p>{this.props.text}</p>
          </section>
        </a >
      )
    } else {
      return (
        <a className="card card-link" href={this.props.href} title={`Gå til ${this.props.text}`}>
          <section className="card-content">
            <p>{this.props.text}</p>
          </section>
        </a >
      )
    }
  }
}

export default LinkCard;