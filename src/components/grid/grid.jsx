import "./grid.css";

function Grid(props) {
  return (
    <section className={`grid`} grids={props.elements.length}>
      {props.elements}
    </section>
  );
}

export default Grid;
