import { Component } from "react";
import { Link } from "react-router-dom";
import "./projectItem.css";

interface Props {
  logo: string,
  title: string,
  description: string
}

class ProjectItem extends Component<Props> {

  render() {
    return (
      <Link to={`portefølje/${this.props.title.toLowerCase()}`} className={`project-item`}>
        <img src={this.props.logo} alt={`${this.props.title} logo`} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </Link >
    );
  }

}

export default ProjectItem;
