import { Component, ComponentClass, ComponentElement } from "react";
import "./externalItem.css";

interface Props {
  title: string,
  href: string,
  logo?: React.ReactSVGElement
}

class ExternalItem extends Component<Props> {
  render() {
    if (this.props.logo !== undefined) {
      return (
        <a
          href={this.props.href}
          title={"Gå til " + this.props.title}
          className="external-item"
        >
          {this.props.logo}
          <p>{this.props.title}</p>
        </a>
      );
    } else {
      return (
        <a
          href={this.props.href}
          title={"Gå til " + this.props.title}
          className="external-item"
        >
          {this.props.logo}
          <p>{this.props.title}</p>
        </a>
      );
    }

  }

}

export default ExternalItem;
