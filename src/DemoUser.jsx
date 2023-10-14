export default function DemoUser() {
  const demoUser = {
    fullName: "Destiny Ezenwambu",
    email: "destibright1@gmail.com",
    number: "+2348165563166",
    address: "Lagos, Nigeria",
    education: [
      {
        schoolName: "River State University",
        degree: "Bachelors in Engineering",
        schoolStartDate: "01/09/2016",
        schoolEndDate: "04/04/2022",
        schoolLocation: "Nigeria, Lagos",
        schoolId: 1,
      },
    ],
    experience: [
      {
        companyName: "Nissan Stallion Nigerian Motors Ltd",
        companyTitle: "Intern",
        companyStartDate: "01/08/2020",
        companyEndDate: "04/01/2021",
        companyLocation: "Nigeria, Lagos",
        companyId: 1,
        description:
          "Participated in the Vehicle Assembly of a number of vehicles. I also worked in the various department in the vehicle assembly plant ",
      },
    ],
  };

  return demoUser;
}

// export default DemoUser;
