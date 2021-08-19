import "./cv.css";
import ExperienceList from "../../components/sections/experience/experienceList";
import EducationList from "../../components/sections/education/educationList";

function CV() {
  return (
    <section className="width-900">
      <ExperienceList />
      <hr />
      <EducationList />
    </section>
  );
}

export default CV;
