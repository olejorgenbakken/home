import { Component } from "react";
import "./grid.css";

interface Props {
  styling: {
    columns?: 8 | 6 | 4 | 2 | 1,
    width: 'contained' | 'full',
    align: 'flex-start' | 'center' | 'flex-end'
  }
  elements: Array<object>
}

class Grid extends Component<Props> {

  setStyle() {
    switch (this.props.styling.width) {
      case "contained":
        let containedStyle = {
          maxWidth: 'var(--max-width)',
          padding: '0 var(--spacing)',
          justifyContent: this.props.styling.align
        }
        return containedStyle;

      case 'full':
        let fullStyle = {
          justifyContent: this.props.styling.align
        }
        return fullStyle;

      default:
        let defaultStyle = {
          maxWidth: 'unset',
          padding: '0',
        }
        return defaultStyle;
    }
  }

  render() {
    if (this.props.styling.columns !== undefined) {
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
