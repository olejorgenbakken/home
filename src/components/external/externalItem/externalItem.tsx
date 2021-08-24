import { Component } from "react";
import "./externalItem.css";

interface Props {
  title: string,
  href: string,
  logo: string
}

class ExternalItem extends Component<Props> {
  render() {
    return (
      <a
        href={this.props.href}
        title={"Gå til " + this.props.title}
        className="external-item"
      >
        {this.props.logo}
      </a>
    );
  }

}

export default ExternalItem;
