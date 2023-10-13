import { BsChevronDown } from "react-icons/bs";
// import { BsChevronUp } from "react-icons/bs";
function Education() {
  return (
    <div className="education">
      <div className="education-top">
        <h1>Education</h1>
        <BsChevronDown size={25} />
        {/* <BsChevronUp /> */}
      </div>
      <form action="">
        <h3>School</h3>
        <input type="text" placeholder="Enter school / university" />
        <h3>Degree</h3>
        <input type="text" placeholder="Enter degree / Field of Study" />
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
          Location <span>Optional</span>
        </h3>
        <input type="text" placeholder="Enter Location" />
        <div className="buttons">
          <button className="button delete">
            {" "}
            <span
              style={{ fontWeight: 700, fontSize: "35px", color: "#848588" }}
            >
              🗑️
            </span>
            Delete
          </button>
          <div>
            <button className="button cancel">Cancel</button>
            <button className="button save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Education;
