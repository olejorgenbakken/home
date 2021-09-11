import { ReactNode } from "react";
import "./grid.css";

interface Props {
  columns?: 8 | 6 | 4 | 2 | 1,
  width?: 'contained' | 'full',
  align?: 'flex-start' | 'center' | 'flex-end',
  children: ReactNode
}

const setStyle = (align?: string, width?: string,) => {
  switch (width) {
    case "contained":
      let containedStyle = {
        maxWidth: 'var(--max-width)',
        padding: '0 var(--spacing)',
        justifyContent: 'flex-start'
      }
      return containedStyle;

    case 'full':
      let fullStyle = {
        justifyContent: align
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

function Grid({ columns, align, width, children }: Props) {
  if (columns) {
    return (
      <section className='grid' data-grids={columns} style={setStyle(align, width)}>
        {children}
      </section >
    );
  } else {
    return (
      <section className='grid flex' style={setStyle(align, width)}>
        {children}
      </section >
    );
  }

}

export default Grid;
