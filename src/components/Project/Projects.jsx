import icon from "../../assets/images/Icon.png";


const Projects = (props) => {

  const projectHandler =() => {
    window.open( props.fileUrl);
  }
  return (
    <div className="w-[80%] md:w-[30%] lg:w-[28%] xl:w-[28%] my-4 md:m-8 ">
      <div className="rounded-lg bg-[#2A2A2A]">
        <div className="rounded-t-xl">
          <img src={props.image} alt="" className="w-full rounded-t-xl" />
        </div>
        <div className="flex justify-between items-center mx-4 h-[66px] py-2">
          <div className="text-white text-[8px] md:text-[10px] lg:text[12px]">
            <a
              href={props.link}
              className="font-poppins  font-bold leading-6"
              target={'_blank'}
            >
              CLICK HERE TO VISIT
            </a>
            <p className="font-poppins text-base md:text-lg font-bold">
              {props.projectName}
            </p>
          </div>
          <div className="w-[15.2px] h-[14.1px]" role="button" onClick={projectHandler}>
            <img src={icon} alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;