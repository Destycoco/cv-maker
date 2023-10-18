import { BsChevronDown } from "react-icons/bs";
import Button from "./Button";

function Education({ user, setUser }) {
  const handleEducationChange = (event, index) => {
    const updatedEducation = [...user.education];
    updatedEducation[index][event.target.name] = event.target.value;

    setUser({
      ...user,
      education: updatedEducation,
    });
  };

  return (
    <div className="education">
      <div className="education-top">
        <h1>Education</h1>
        <BsChevronDown size={25} />
      </div>
      {user.education.map((education, index) => (
        <form action="" key={education.schoolId}>
          <h3>School</h3>
          <input
            type="text"
            placeholder="Enter school / university"
            value={education.schoolName}
            onChange={(event) => handleEducationChange(event, index)}
            name="schoolName"
          />
          <h3>Degree</h3>
          <input
            type="text"
            placeholder="Enter degree / Field of Study"
            value={education.degree}
            onChange={(event) => handleEducationChange(event, index)}
            name="degree"
          />
          <div className="date">
            <div className="start-date">
              <h3>Start Date</h3>
              <input
                type="Date"
                value={education.schoolStartDate}
                onChange={(event) => handleEducationChange(event, index)}
                name="schoolStartDate"
              />
            </div>
            <div className="end-date">
              <h3>End Date</h3>
              <input
                type="Date"
                value={education.schoolEndDate}
                onChange={(event) => handleEducationChange(event, index)}
                name="schoolEndDate"
              />
            </div>
          </div>
          <h3>
            Location <span className="recommend">Optional</span>
          </h3>
          <input
            type="text"
            placeholder="Enter Location"
            value={education.schoolLocation}
            onChange={(event) => handleEducationChange(event, index)}
            name="schoolLocation"
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
      ))}
    </div>
  );
}

export default Education;
