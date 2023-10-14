import { useState } from "react";
import SwitchCover from "./Switchcover";
import Information from "./Information";
import Display from "./Display";
import demoUser from "./DemoUser";

function App() {
  const testUser = demoUser();
  // console.log(testUser);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const companyId = crypto.randomUUID();
  const [description, setDescription] = useState("");

  return (
    <body>
      <div className="main">
        <SwitchCover />
        <Information
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          number={number}
          setNumber={setNumber}
          address={address}
          setAddress={setAddress}
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
        <Display />
      </div>
    </body>
  );
}

export default App;
