import { Link, useRouteMatch } from "react-router-dom";
import "./projectItem.css";

function ProjectItem(props) {
  let match = useRouteMatch();

  return (
    <Link to={`${match.path}/${props.title}`} className={`project-item`}>
      <img src={props.logo} alt={`${props.title} logo`} />
      <h2>{props.title}</h2>
    </Link>
  );
}

export default ProjectItem;
