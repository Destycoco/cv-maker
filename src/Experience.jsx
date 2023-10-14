import { BsChevronDown } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";
import Button from "./Button";

function Experience({
  companyName,
  setCompanyName,
  companyTitle,
  setCompanyTitle,
  companyStartDate,
  setCompanyStartDate,
  companyEndDate,
  setCompanyEndDate,
  companyLocation,
  setCompanyLocation,
  description,
  setDescription,
}) {
  return (
    <div className="experience">
      <div className="education-top">
        <h1>Experience</h1>
        <BsChevronDown size={25} />
      </div>

      <h3>Company Name</h3>
      <input
        type="text"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <h3>Position Title</h3>
      <input type="text" placeholder="Enter Position Title" />
      <div className="date">
        <div className="start-date">
          <h3>Start Date</h3>
          <input type="Date" />
        </div>
        <div className="end-date">
          <h3>End Date</h3>
          <input type="Date" />
        </div>
      </div>
      <h3>
        Location <span className="recommend">Optional</span>
      </h3>
      <input type="text" placeholder="Enter Location" />
      <h3>
        Description <span className="recommend">Optional</span>
      </h3>
      <textarea placeholder="Enter Description"></textarea>
      <div className="buttons">
        <Button type={"cancel"} emoji={"🗑️"}>
          Delete
        </Button>
        <div>
          <Button type={"cancel"}>Cancel</Button>
          <Button type={"save"}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
