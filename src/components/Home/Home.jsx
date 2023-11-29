import myImage from "../../assets/images/picture.jpg";
import BlackButton from "../Button/Button";

export const Home = () => {
  const downloadHandler = () => {
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1YobuEs1jKetILrMiyg44DZfwpsTiaIuOc5fBnP6bzks";
    window.open(fileUrl);
  };
  const contactHandler = () => {
    const contactSection = document.getElementById("contact"); // Replace 'contact' with the ID of your contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="flex justify-center items-center text-center flex-col"
      id="home"
    >
      <div className="flex w-[213px] h-[213px] sm:w-[300px] sm:h-[300px] rounded-full mt-8 mb-4">
        <img
          src={myImage}
          alt=""
          className="rounded-full w-auto h-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
      </div>
      <div className="text-[40px] sm:text-[30px] md:text-[40px] font-poppins text-white w-full sm:w-3/4 lg:w-1/2 px-4 sm:px-0">
        <p className="font-bold leading-[1.5] mb-8">
          I am a front-end Engineer and
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#9A33FF]">
            {" "}
            I love learning new technologies!
          </span>
        </p>
        <p className="text-[14px] sm:text-[16px] font-light text-[#C5C5C5] leading-7">
          "As a computer science graduate and passionate software engineer, I
          thrive on creating innovative solutions to complex problems. My
          dedication to continuous learning fuels my drive to stay at the
          forefront of technology and deliver impactful software solutions."
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center  my-12 font-poppins font-semibold w-full sm:w-3/4 lg:w-1/2">
        <BlackButton
          text="Get In Touch"
          bgcolor="white"
          text_col="black"
          extraClasses="mb-4 sm:mb-0 sm:mr-4"
          onClick={contactHandler}
        />
        <BlackButton
          text="Download CV"
          bgcolor="black"
          text_col="white"
          extraClasses="sm:ml-4"
          onClick={downloadHandler}
        />
      </div>
    </div>
  );
};

export default Home;
