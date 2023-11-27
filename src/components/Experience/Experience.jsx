import Experiences from "../Experience/Experiences";

const Experience =()=> {
    return(
        <div className="flex justify-center items-center flex-col" id="experience">
        <div className="w-[60%] flex justify-center items-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1] font-extrabold lg:text-[35px] text-[20px] md:text-[30px]">
            <p>EXPERIENCE</p>
          </div>
        </div>
        
        <div className="flex  flex-col w-full justify-center items-center">
          <Experiences />
          <Experiences />
          <Experiences />
        </div>
        </div>
    )
}

export default Experience