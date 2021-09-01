import { Component } from "react";
import { ReactComponent as ExternalIcon } from "../../assets/icons/link_external.svg";
import "./link.css";

interface Props {
  href: string,
  title: string,
  text: string
}

class ExternalLink extends Component<Props> {
  render() {
    return (
      <span className="external-link">
        <a href={this.props.href} title={this.props.title} className="link">
          {this.props.text}
        </a>
        <ExternalIcon />
      </span>
    );
  }

}

export default ExternalLink;
