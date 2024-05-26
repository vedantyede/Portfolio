import React from "react";

const Experience = () => {
  const data = {
    data: [
      {
        present: true,
        date: "Aug/2023 - Present",
        designation: "Senior Software Engineer",
        company: "Persistent Systems",
        description:
          "I developed and maintained user-friendly web applications using ReactJS and JavaScript, focusing on scalability and reusability. Collaboration with backend developers ensured seamless integration of RESTful APIs. Active participation in Agile/Scrum ceremonies provided insights into project status and technical challenges. Additionally, collaboration with UX/UI designers ensured adherence to user experience and accessibility standards, while optimizing website performance through asset optimization and lazy loading techniques.",
      },
      {
        present: false,
        date: "Aug/2021  -  Aug/2023",
        designation: "Software Engineer",
        company: "Persistent Systems",
        description:
          "I assisted in developing single-page applications (SPAs) with ReactJS, prioritizing user experience. Through rigorous testing, including unit and end-to-end tests, I ensured code reliability and resolved frontend issues seamlessly. Actively engaged in all SDLC phases, I built an automated test framework using Cypress to streamline processes. Additionally, I designed and executed comprehensive test plans and scripts to evaluate software functionality thoroughly.",
      },
    ],
  };
  return (
    <div className="bg-gradient-to-b to-darkBlueBg from-lightDarkBlueBg overflow-hidden relative">
      <div className="h-screen w-full flex flex-col justify-center lg:justify-around items-center">
        <div className="text-5xl sm:text-8xl font-bold mb-10">EXPERIENCE</div>
        {data.data.map((item) => (
          <div className="flex flex-col lg:flex-row justify-center text-center items-center md:w-1/2 lg:gap-10">
            <div className={"sm:hidden"}>
              {item.present == false ? "^" : ""}
            </div>
            <div
              className={`${
                item.present === false ? "" : "hidden"
              } -mt-4 h-10 sm:h-3/4 bg-white w-[1px] sm:block`}
            ></div>
            <div className="text-slate-400 text-sm">{item.date}</div>
            <div className="text-yellow-600 text-lg">{item.designation}</div>
            <div className="text-sm">{item.company}</div>
            <div className="text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
