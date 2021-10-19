import { education, experience } from "../../assets/data/CV";
import CVList from "../../components/cv/CVList";

import './cv.css';

const Cv = () => {
  return (
    <main id="cv" className="flex-column gap-2 constrain padding">
      <header>
        <h1>CV</h1>
      </header>

      <section className="flex-column gap-8">
        <section className="flex-column gap-2">
          <header>
            <h2>Erfaring</h2>
          </header>

          <CVList section={education} />
        </section>

        <section className="flex-column gap-2">
          <header>
            <h2>Utdanning</h2>
          </header>

          <CVList section={experience} />
        </section>
      </section>
    </main>
  );
}

export default Cv;
