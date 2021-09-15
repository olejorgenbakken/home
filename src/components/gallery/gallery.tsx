import { ReactNode } from "react";
import "./gallery.css";

interface Props {
  type: 'grid' | 'row',
  columns?: '8' | '7' | '6' | '5' | '4' | '3' | '2' | '1',
  align?: 'flex-start' | 'center' | 'flex-end',
  children: ReactNode[]
}

const setStyle = (align?: string) => {
  let styling = {
    justifyContent: align,
  }
  return styling;
}

function Gallery({ type, columns, align, children }: Props) {
  return (
    <section className={type} data-columns={columns} style={setStyle(align)}>
      {children}
    </section >
  );
}

export default Gallery;
