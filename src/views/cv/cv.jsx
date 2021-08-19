import "./cv.css";
import ExperienceList from "../../components/sections/experience/experienceList";
import EducationList from "../../components/sections/education/educationList";
import ExternalList from "../../components/sections/other/external/externalList";

function CV() {
  return (
    <section className="width-900 header">
      <h1>CV</h1>
      <ExperienceList />
      <hr />
      <EducationList />
      <hr />
      <ExternalList />
    </section>
  );
}

export default CV;
