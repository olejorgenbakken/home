import CV from "../../components/CV/CV";
import Sidetittel from "../../components/Sidetittel/Sidetittel";

import './OmMeg.css';

const OmMeg = () => {
  return (
    <main id="om-meg" className="gap-2">
      <Sidetittel tittel="Om meg" />

      <article className="innhold">
        <CV />
      </article>
    </main>
  );
}

export default OmMeg;
