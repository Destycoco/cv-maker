import { useState } from "react";
import SwitchCover from "./Switchcover";
import Information from "./Information";
import Display from "./Display";

function App() {
  const [user, setUser] = useState({
    fullName: "David",
    email: "destibright1@gmail.com",
    number: "08165563166",
    address: "Lagos, Nigeria",
    education: [
      {
        schoolName: "Rivers State University",
        degree: "Bachelor of Technology",
        schoolStartDate: "2016-09-13",
        schoolEndDate: "2022-04-12",
        schoolLocation: "Lagos, Nigeria",
        schoolId: 1,
      },
      {
        schoolName: "Oxford  University",
        degree: "Masters",
        schoolStartDate: "2016-09-13",
        schoolEndDate: "2022-04-12",
        schoolLocation: "Lagos, Nigeria",
        schoolId: 1,
      },
    ],
    experience: [
      {
        companyName: "Nissan Stallion Motors Nigeria Ltd",
        companyTitle: "Intern",
        companyStartDate: "2020-07-12",
        companyEndDate: "2021-01-04",
        companyLocation: "Lagos, Nigeria",
        companyId: 1,
        description:
          "Assembled a variety of vehicles and carried out vehicle inpections",
      },
    ],
  });
  return (
    <body>
      <div className="main">
        <SwitchCover />
        <Information user={user} setUser={setUser} />
        <Display testUser={user} />
      </div>
    </body>
  );
}

export default App;
