import "./gallery.css";

function Gallery(props) {
  const galleryStyle = {
    gridTemplateColumns: `repeat(${props.images.length}, max-content)`,
    height: `${props.height}px`,
  };

  const imageStyle = {
    height: `${props.height}px`,
  };

  const images = props.images.map((image) => (
    <img
      key={image.src}
      src={image.src}
      alt={image.alt}
      style={imageStyle}
    ></img>
  ));

  return (
    <section className="gallery" animated={props.animated} style={galleryStyle}>
      {images}
    </section>
  );
}

export default Gallery;
