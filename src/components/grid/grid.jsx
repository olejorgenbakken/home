import "./grid.css";

function Grid(props) {
  return (
    <section className={"grid"} grids={props.grids}>
      {props.elements}
    </section>
  );
}

export default Grid;
