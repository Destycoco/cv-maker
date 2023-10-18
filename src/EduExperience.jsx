function EduExperience({ testUser }) {
  return (
    <div className="edu-experience">
      <h2>Education</h2>
      <div className="education-list">
        {testUser.education.map((edu) => (
          <Education edu={edu} key={edu.schoolId} />
        ))}
      </div>
      <h2>Professional Experience</h2>
      <div className="education-list">
        {testUser.experience.map((exp) => (
          <Experience exp={exp} key={exp.companyId} />
        ))}
      </div>
    </div>
  );
}
function Education({ edu }) {
  //   console.log(edu);
  return (
    <div className="list-item">
      <p>
        {edu.schoolStartDate.split("").slice(0, 7)} {edu.schoolEndDate && "-"}{" "}
        {edu.schoolEndDate.split("").slice(0, 7)}
      </p>
      <h4>{edu.schoolName}</h4>
      <p>{edu.schoolLocation}</p>
      <p>{edu.degree}</p>
    </div>
  );
}
function Experience({ exp }) {
  return (
    <div className="list-item">
      <p>
        {exp.companyStartDate.split("").slice(0, 7)} {exp.companyEndDate && "-"}{" "}
        {exp.companyEndDate.split("").slice(0, 7)}
      </p>
      <h4>{exp.companyName}</h4>
      <p>{exp.companyLocation}</p>
      <p>{exp.companyTitle}</p>
      <p>{exp.description}</p>
    </div>
  );
}
export default EduExperience;
