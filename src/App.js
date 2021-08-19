import "./styles/main.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CV from "./views/cv/cv";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header
        name="Ole Jørgen"
        description="Interaksjons&shy;designer og utvikler"
      />
      <CV />
      <Footer
        text="Kildekoden til denne nettsiden er tilgjengelig på"
        link="https://github.com/olejorgenbakken/home"
        linkText="GitHub"
      />
    </div>
  );
}

export default App;
