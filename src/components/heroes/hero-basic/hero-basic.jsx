import "./hero-basic.css";

function Hero(props) {
  const heroStyle = {
    backgroundImage: "url(" + props.backgroundImg + ")",
  };

  return (
    <section className="hero-basic" style={heroStyle}>
      <article>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </article>
    </section>
  );
}

export default Hero;
