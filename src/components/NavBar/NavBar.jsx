import { useState } from "react";
import { Link } from "react-scroll";

import logo from "../../assets/images/logo.png";
import { RxDropdownMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  const toggleMenu = () => {
    setToggleSideNav(!toggleSideNav);
  };

  return (
    <nav className="bg-[#222222] w-full flex justify-center h-[83px] ">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center w-1/4 sm:w-1/5 md:w-1/6">
          <img src={logo} alt="nav logo" className="h-8 md:h-10 lg:h-12" />
        </div>

        {/* Navigation Menu - Desktop view */}
        <div className="hidden sm:flex justify-center items-center w-2/3 sm:w-3/4">
          <ul className="text-white hover:text-gray-300 text-[15px] font-jarkata flex justify-between w-full">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="hover:text-gray-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-gray-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
      </div>

      {/* Navigation Menu - Mobile view */}
      {toggleSideNav && (
        <nav className="sm:hidden w-full absolute top-14 bg-[#222222] text-center">
          <ul className="text-white hover:text-gray-300 text-[15px] font-jarkata flex flex-col items-center py-4">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={toggleMenu}
                className="hover:text-gray-300 block py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
                onClick={toggleMenu}
                className="hover:text-gray-300 block py-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                onClick={toggleMenu}
                className="hover:text-gray-300 block py-2"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={2}
                duration={2000}
                onClick={toggleMenu}
                className="hover:text-gray-300 block py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex sm:hidden items-center">
        <i onClick={toggleMenu} className="text-white mr-4">
          {!toggleSideNav ? <RxDropdownMenu /> : <AiOutlineClose />}
        </i>
      </div>
    </nav>
  );
};

export default NavBar;
