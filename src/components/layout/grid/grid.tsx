import { ReactNode } from "react";
import "./grid.css";

interface Props {
  columns?: 8 | 6 | 4 | 2 | 1,
  align?: 'flex-start' | 'center' | 'flex-end',
  children: ReactNode
}

const setStyle = (align?: string) => {
  let styling = {
    justifyContent: align
  }
  return styling;
}

function Grid({ columns, align, children }: Props) {
  if (columns) {
    return (
      <section className='grid' data-grids={columns} style={setStyle(align)}>
        {children}
      </section >
    );
  } else {
    return (
      <section className='grid flex' style={setStyle(align)}>
        {children}
      </section >
    );
  }

}

export default Grid;
