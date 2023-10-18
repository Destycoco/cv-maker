import DisplayDetails from "./DisplayDetails";
import EduExperience from "./EduExperience";
function Display({ testUser }) {
  return (
    <div className="display">
      <DisplayDetails testUser={testUser} />
      <EduExperience testUser={testUser} />
    </div>
  );
}

export default Display;
