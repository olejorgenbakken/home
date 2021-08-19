import Hero from "../../components/heroes/hero-basic/hero-basic";

function Home(props) {
  return (
    <Hero
      title="Velkommen"
      backgroundImg="https://images.unsplash.com/photo-1608255726239-8d44c46cdd58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80"
      message="Denne nettsiden er veldig WIP ⚙️"
    />
  );
}

export default Home;
