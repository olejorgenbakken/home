import "./hero.css";

function Hero(props) {
  const heroStyle = {
    backgroundImage: "url(" + props.backgroundImg + ")",
    background:
      "linear-gradient(var(--background) 0%, var(--background-darker), var(--background) 100%)",
  };

  return (
    <section className="hero" style={heroStyle}>
      <article className="width-1000">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </article>
    </section>
  );
}

export default Hero;
