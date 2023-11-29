import email from "../../assets/images/Email.png";
import insta from "../../assets/images/instagram.png";
import twitter from "../../assets/images/x.png";
import youtube from "../../assets/images/youtube.png";

const Contact = () => {
  const instacontactHandler = () => {
    window.open(
      "https://instagram.com/t.i.t.o.f.u.n.m.i?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
    );
  };
  const xcontactHandler = () => {
    window.open("https://twitter.com/titofunmiola");
  };
  const youcontactHandler = () => {
    window.open("https://github.com/olatito");
  };
  const linkedIncontactHandler = () => {
    window.open("https://linkedin.com/in/olayiwola-tofunmi-611a3a1b5");
  };
  return (
    <div
      className="flex justify-center items-center  bg-[#222222] w-full"
      id="contact"
    >
      <div className="w-[90%] md:w-[60%] my-8 md:my-16 font-poppins">
        <div className="w-full md:w-[90%]">
          <h1 className="text-white font-bold text-lg md:text-xl my-4">
            Contact
          </h1>
          <p className="text-[#C5C5C5] text-sm md:text-base my-4 font-light leading-6">
            As a software engineer, I offer expertise in full-stack development,
            from crafting elegant front-end interfaces to designing scalable
            back-end architectures. My commitment to clean code and rigorous
            testing ensures robust and maintainable software solutions. I bring
            innovation and problem-solving to every project, delivering
            technology-driven results that drive success.
          </p>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="text-[#C5C5C5] flex items-center justify-start">
            <img src={email} alt="" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <a
              href="mailto:olayiwolatofunmi212@gmail.com"
              className="text-sm md:text-base"
            >
              olayiwolatofunmi212@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full md:w-[20%] my-4 md:my-8">
          <div className="flex justify-between">
            <div role="button" onClick={instacontactHandler}>
              <img src={insta} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div role="button" onClick={xcontactHandler}>
              <img src={twitter} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div role="button" onClick={youcontactHandler}>
              <img src={youtube} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div role="button" onClick={linkedIncontactHandler}>
              <img src={youtube} alt="" className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
