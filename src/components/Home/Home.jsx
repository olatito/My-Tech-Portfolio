import myImage from "../../assets/images/picture.jpg";
import BlackButton from "../Button/Button";


export const Home = () => {

  const downloadHandler = () => {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1YobuEs1jKetILrMiyg44DZfwpsTiaIuOc5fBnP6bzks'; // Replace with your file's URL or path
    window.open(fileUrl);
  };
  const contactHandler = () => {
    const contactSection = document.getElementById('contact'); // Replace 'contact' with the ID of your contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }  };
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
      <div className="text-[32px] sm:text-[40px] md:text-[55px] font-poppins text-white w-full sm:w-3/4 lg:w-1/2 px-4 sm:px-0">
        <p className="font-extrabold leading-[1.5] mb-8">
          I do code and <br />
          make content{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#9A33FF]">
            {" "}
            about it !
          </span>
        </p>
        <p className="text-[14px] sm:text-[16px] font-light text-[#C5C5C5] leading-7">
          I am a seasoned full-stack software engineer with over <br />
          8 years of professional experience, specializing in backend
          development. <br />
          My expertise lies in crafting robust and scalable SaaS-based <br />
          architectures on the Amazon AWS platform.
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
