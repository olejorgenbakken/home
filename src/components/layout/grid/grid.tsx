import "./grid.css";

interface Props {
  styling: {
    columns?: 8 | 6 | 4 | 2 | 1,
    width: 'contained' | 'full',
    align?: 'flex-start' | 'center' | 'flex-end'
  }
  elements: Array<object>
}

const setStyle = (styling: { columns?: number, width: string, align?: string }) => {
  switch (styling.width) {
    case "contained":
      let containedStyle = {
        maxWidth: 'var(--max-width)',
        padding: '0 var(--spacing)',
        justifyContent: 'flex-start'
      }
      return containedStyle;

    case 'full':
      let fullStyle = {
        justifyContent: styling.align
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

function Grid({ styling, elements }: Props) {
  if (styling.columns) {
    return (
      <section className='grid' data-grids={styling.columns} style={setStyle(styling)}>
        {elements}
      </section >
    );
  } else {
    return (
      <section className='grid flex' style={setStyle(styling)}>
        {elements}
      </section >
    );
  }

}

export default Grid;
