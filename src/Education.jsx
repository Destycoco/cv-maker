import { BsChevronDown } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";
import Button from "./Button";
function Education({
  schoolName,
  setSchoolName,
  degree,
  setDegree,
  schoolStartDate,
  setSchoolStartDate,
  schoolEndDate,
  setSchoolEndDate,
  schoolLocation,
  setSchoolLocation,
}) {
  return (
    <div className="education">
      <div className="education-top">
        <h1>Education</h1>
        <BsChevronDown size={25} />
        {/* <BsChevronUp /> */}
      </div>
      <form action="">
        <h3>School</h3>
        <input
          type="text"
          placeholder="Enter school / university"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <h3>Degree</h3>
        <input
          type="text"
          placeholder="Enter degree / Field of Study"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <div className="date">
          <div className="start-date">
            <h3>Start Date</h3>
            <input
              type="Date"
              value={schoolStartDate}
              onChange={(e) => setSchoolStartDate(e.target.value)}
            />
          </div>
          <div className="end-date">
            <h3>End Date</h3>
            <input
              type="Date"
              value={schoolEndDate}
              onChange={(e) => setSchoolEndDate(e.target.value)}
            />
          </div>
        </div>
        <h3>
          Location <span className="recommend">Optional</span>
        </h3>
        <input
          type="text"
          placeholder="Enter Location"
          value={schoolLocation}
          onChange={(e) => setSchoolLocation(e.target.value)}
        />
        <div className="buttons">
          <Button type={"cancel"} emoji={"🗑️"}>
            Delete
          </Button>
          <div>
            <Button type={"cancel"}>Cancel</Button>
            <Button type={"save"}>Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Education;
