import Experiences from "../Experience/Experiences";

const Experience = () => {
  const concepts = [
    {
      date: "[Sept 2023 -  Nov 2023]",
      title: "Intern, Front-end Developer",
      place:"HNGx ",
      description:
        "As an intern at HNG , I've crafted stunning and responsive user interfaces that captivate and engage users. My expertise includes proficiency in HTML, CSS, JavaScript,Git , Tailwind, Typescript and various modern frameworks like Reactjs, Nextjs, Astro.",
    },
    {
      date: "[Feb 2021 -  Dec 2021]",
      title: "Intern , Software Engineer ",
      place:"New Horizons ",
      description:
        "As a software engineering Intern at New Horizons, I offer expertise in full-stack development, from crafting elegant front-end interfaces to designing scalable back-end architectures. My commitment to clean code and rigorous testing ensures robust and maintainable software solutions. I bring innovation and problem-solving to every project, delivering technology-driven results that drive success.",
    },
    {
      date: "[June 2020- December 2020]",
      title: "Software Engineer Training",
      place:"ALX Africa ",
      description:
        "As a software engineer at ALX, I architect and build solutions that drive technological progress. I embrace challenges as opportunities for innovation and thrive in dynamic problem-solving environments. My code is a reflection of precision, efficiency, and a commitment to delivering high-quality software.",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col" id="experience">
      <div className="w-[60%] flex justify-center items-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-extrabold lg:text-[35px] text-[20px] md:text-[30px]">
          <p>EXPERIENCE</p>
        </div>
      </div>

      <div className="flex  flex-col w-full justify-center items-center">
        <Experiences
          date={concepts[0].date}
          position={concepts[0].title}
          place={concepts[0].place}
          role={concepts[0].description}
        />
        <Experiences
          date={concepts[1].date}
          position={concepts[1].title}
          place={concepts[1].place}
          role={concepts[1].description}
        />
        <Experiences
          date={concepts[2].date}
          position={concepts[2].title}
          place={concepts[2].place}
          role={concepts[2].description}
        />
      </div>
    </div>
  );
};

export default Experience;
