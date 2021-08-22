import { Component } from "react";
import { ReactComponent as Icon } from "../../../assets/icons/link_external.svg";
import "./externalLink.css";

interface Props {
  href: string,
  title: string,
  text: string
}

class ExternalLink extends Component<Props> {
  render() {
    return (
      <span className="external-link">
        <a href={this.props.href} title={this.props.title} className="external-link">
          {this.props.text}
        </a>
        <Icon />
      </span>
    );
  }

}

export default ExternalLink;
