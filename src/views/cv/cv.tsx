import { education, experience } from "../../assets/data/CV";
import CVList from "../../components/cv/CVList";

import './cv.css';


function Cv() {
  return (
    <main id="cv" className="flex-column gap-2 constrain padding">
      <header>
        <h1>CV</h1>
      </header>
      <section className="flex-column gap-8">
        <CVList title="Erfaring" section={experience} />
        <CVList title="Utdanning" section={education} />
      </section>
    </main>
  );
}

export default Cv;
