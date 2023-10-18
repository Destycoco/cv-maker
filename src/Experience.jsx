import { BsChevronDown } from "react-icons/bs";
import Button from "./Button";

function Experience({ user, setUser }) {
  const handleExperienceChange = (e, index) => {
    const updatedExperience = [...user.experience];
    updatedExperience[index][e.target.name] = e.target.value;

    setUser({
      ...user,
      experience: updatedExperience,
    });
  };

  return (
    <div className="experience">
      <div className="education-top">
        <h1>Experience</h1>
        <BsChevronDown size={25} />
      </div>
      {user.experience.map((experience, index) => (
        <form action="" key={index}>
          <h3>Company Name</h3>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={experience.companyName}
            onChange={(e) => handleExperienceChange(e, index)}
            name="companyName"
          />
          <h3>Position Title</h3>
          <input
            type="text"
            placeholder="Enter Position Title"
            value={experience.companyTitle}
            onChange={(e) => handleExperienceChange(e, index)}
            name="companyTitle"
          />
          <div className="date">
            <div className="start-date">
              <h3>Start Date</h3>
              <input
                type="Date"
                value={experience.companyStartDate}
                onChange={(e) => handleExperienceChange(e, index)}
                name="companyStartDate"
              />
            </div>
            <div className="end-date">
              <h3>End Date</h3>
              <input
                type="Date"
                value={experience.companyEndDate}
                onChange={(e) => handleExperienceChange(e, index)}
                name="companyEndDate"
              />
            </div>
          </div>
          <h3>
            Location <span className="recommend">Optional</span>
          </h3>
          <input
            type="text"
            placeholder="Enter Location"
            value={experience.companyLocation}
            onChange={(e) => handleExperienceChange(e, index)}
            name="companyLocation"
          />
          <h3>
            Description <span className="recommend">Optional</span>
          </h3>
          <textarea
            placeholder="Enter Description"
            value={experience.description}
            onChange={(e) => handleExperienceChange(e, index)}
            name="description"
          ></textarea>
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

export default Experience;
