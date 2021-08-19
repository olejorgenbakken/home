import "./row.css";

function Row(props) {
  return <section className={"row " + props.type}>{props.elements}</section>;
}

export default Row;
