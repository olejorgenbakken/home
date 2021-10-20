import { utdanning, erfaring } from "../../assets/data/CV";
import CVElementer from "../../components/CV/CVElementer";

import './Om.css';

const Om = () => {
  return (
    <main className="gap-2 ">
      <header>
        <h1>Om meg</h1>
      </header>

      <section className="gap-2">
        <header>
          <h2>CV</h2>
        </header>

        <section className="gap-8">
          <section className="gap-2">
            <header>
              <h3>Erfaring</h3>
            </header>

            <CVElementer section={utdanning} />
          </section>

          <section className="gap-2">
            <header>
              <h3>Utdanning</h3>
            </header>

            <CVElementer section={erfaring} />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Om;
