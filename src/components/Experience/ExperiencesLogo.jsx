import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/javascript.png";
import node from "../../assets/images/nodejs.png";
import react from "../../assets/images/reactjs.png";

const ExperienceLogo = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-[#C5C5C5] font-poppins font-semibold text-[20px] leading-7">
        <p>EXPERIENCE WITH</p>
      </div>
      <div className="flex justify-between lg:w-[40%] my-12 w-[90%] md:w-[60%]">
        <div className="flex justify-center">
          <img src={css} alt="css logo" className="h-[42px] w-[42px]" />
        </div>
        <div className="flex justify-center">
          <img src={html} alt="css logo" className="h-[42px] w-[42px]" />
        </div>
        <div className="flex justify-center">
          <img src={js} alt="css logo" className="h-[42px] w-[42px]" />
        </div>
        <div className="flex justify-center">
          <img src={node} alt="css logo" className="h-[42px] w-[42px] " />
        </div>
        <div className="flex justify-center">
          <img src={react} alt="css logo" className="h-[42px] w-[42px] " />
        </div>
      </div>
    </div>
  );
};

export default ExperienceLogo;
