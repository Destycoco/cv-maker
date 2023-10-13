import UpdateResume from "./UpdateResume";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
function Information() {
  return (
    <div className="information">
      <UpdateResume />
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  );
}

export default Information;
