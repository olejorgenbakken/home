import { Component } from "react";
import "./grid.css";

interface Props {
  elements: Array<object>
}

class Grid extends Component<Props> {
  render() {
    return (
      <section className='grid' data-grids={this.props.elements.length} >
        {this.props.elements}
      </section >
    );
  }

}

export default Grid;
