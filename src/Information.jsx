// import UpdateResume from "./UpdateResume";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import UpdateResume from "./UpdateResume";
function Information({ user, setUser }) {
  return (
    <div className="information">
      <UpdateResume />
      <PersonalDetails user={user} setUser={setUser} />
      <Education user={user} setUser={setUser} />
      <Experience user={user} setUser={setUser} />
    </div>
  );
}

export default Information;
