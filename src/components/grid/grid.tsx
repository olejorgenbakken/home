import { Component } from "react";
import "./grid.css";

interface Props {
  styling: {
    columns?: 8 | 6 | 4 | 2 | 1,
    width: 'contained' | 'full',
  }
  elements: Array<object>
}

class Grid extends Component<Props> {

  setStyle() {
    let style = {
      maxWidth: '',
      padding: ''
    }

    if (this.props.styling != undefined) {
      if (this.props.styling.width === 'contained') {
        style.maxWidth = 'var(--max-width)'
        style.padding = '0 var(--spacing)'
      }
    } else {
      style.maxWidth = 'unset'
      style.padding = '0'
    }

    return style;
  }

  render() {
    if (this.props.styling.columns != undefined) {
      return (
        <section className='grid' data-grids={this.props.styling.columns} style={this.setStyle()} >
          {this.props.elements}
        </section >
      );
    } else {
      return (
        <section className='grid flex' style={this.setStyle()}>
          {this.props.elements}
        </section >
      );
    }

  }

}

export default Grid;
