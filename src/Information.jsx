import UpdateResume from "./UpdateResume";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
function Information({
  fullName,
  setFullName,
  email,
  setEmail,
  number,
  setNumber,
  address,
  setAddress,
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
    <div className="information">
      <UpdateResume />
      <PersonalDetails
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
        address={address}
        setAddress={setAddress}
      />
      <Education
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        degree={degree}
        setDegree={setDegree}
        schoolStartDate={schoolStartDate}
        setSchoolStartDate={setSchoolStartDate}
        schoolEndDate={schoolEndDate}
        setSchoolEndDate={setSchoolEndDate}
        schoolLocation={schoolLocation}
        setSchoolLocation={setSchoolLocation}
      />
      <Experience
        companyName={companyName}
        setCompanyName={setCompanyName}
        companyTitle={companyTitle}
        setCompanyTitle={setCompanyTitle}
        companyStartDate={companyStartDate}
        setCompanyStartDate={setCompanyStartDate}
        companyEndDate={companyEndDate}
        setCompanyEndDate={setCompanyEndDate}
        companyLocation={companyLocation}
        setCompanyLocation={setCompanyLocation}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}

export default Information;
