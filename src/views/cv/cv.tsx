import { Component } from "react";
import EntryList from "../../components/cv/list";
import CV from "../../assets/data/CV";

import './cv.css';

class Cv extends Component {
  render() {
    return (
      <main id="cv">
        <EntryList data={CV.experience} title="Arbeidserfaring" />
        <hr />
        <EntryList data={CV.education} title="Utdanning" />
      </main>
    );
  }

}

export default Cv;
