import { Component } from "react";
import './link.css'

interface Props {
  image?: string,
  text: string
  link: string
}

class Link extends Component<Props> {

  getImage() {
    if (this.props.image) {
      return (
        <section className="card-image">
          <img src={this.props.image} alt={this.props.image} />
        </section>
      )
    } else {
      return null
    }
  }

  getContent() {
    return (
      <section className="card-content">
        <p>{this.props.text}</p>
      </section>
    )
  }

  render() {
    return (
      <a className="card card-link" href={this.props.link} title={`Gå til ${this.props.text}`}>
        {this.getImage()}
        {this.getContent()}
      </a >
    )

  }
}

export default Link;