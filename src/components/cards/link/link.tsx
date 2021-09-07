import { Component } from "react";
import './link.css'

interface Props {
  image?: string,
  text: string
  href: string
}

class LinkCard extends Component<Props> {

  getContent() {
    return (<section className="card-content">
      <p>{this.props.text}</p>
    </section>)
  }

  render() {
    if (this.props.image !== undefined) {
      return (
        <a className="card card-link" href={this.props.href} title={`Gå til ${this.props.text}`}>
          <section className="card-image">
            <img src={this.props.image} alt={this.props.image} />
          </section>
          {this.getContent()}
        </a >
      )
    } else {
      return (
        <a className="card card-link" href={this.props.href} title={`Gå til ${this.props.text}`}>
          {this.getContent()}
        </a >
      )
    }
  }
}

export default LinkCard;