import Projects from "./Projects";
import project1 from "../../assets/images/tifi.png";
import project2 from "../../assets/images/dragNdrop.png";
import project3 from "../../assets/images/helpmeOut.png";
import project4 from "../../assets/images/MovieBox.png";

const Project = () => {
  return (
    <div id="project">
      <div className="mb-16">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] font-extrabold lg:text-[35px] text-[20px] md:text-[30px] text-center py-8">
          <p>PROJECTS</p>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <Projects
            projectName="TIFI PROJECT"
            image={project1}
            link="https://group-4-astro-project-website-qu5pjfs2p-olatito.vercel.app/"
            fileUrl="https://group-4-astro-project-website-qu5pjfs2p-olatito.vercel.app/"
          />
          <Projects
            projectName="Drop N Drag Gallery"
            image={project2}
            link="https://hng-task3-six.vercel.app/gallery"
            fileUrl="https://hng-task3-six.vercel.app/gallery"
          />
        </div>
        <div className="w-full flex justify-center items-center flex-wrap">
          <Projects projectName="Help Me Out" image={project3} link="https://help-me-out-web-gamma.vercel.app/"
            fileUrl="https://help-me-out-web-gamma.vercel.app/" />
          <Projects projectName="Movie-Box PROJECT" image={project4} link="https://movie-box-eosin.vercel.app/"
            fileUrl="https://movie-box-eosin.vercel.app/" />
        </div>
      </div>
    </div>
  );
};

export default Project;
