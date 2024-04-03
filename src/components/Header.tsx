import { useEffect, useState } from "react";
import "../App.css";
import Avatar from "../images/avatar.png";
import Grow from "@mui/material/Grow";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import { Dropdown } from "flowbite-react";

interface HeaderProps {
  scrollToLanding: () => void;
  scrollToAboutMe: () => void;
  scrollToExperience: () => void;
  scrollToProject: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToLanding,
  scrollToAboutMe,
  scrollToExperience,
  scrollToProject,
}) => {
  const [checked, setChecked] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    setChecked(!checked);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  return (
    <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div
        className={`Header: lavender flex flex-row justify-between fixed text-2xl z-10 p-6 lg:pr-20 w-full font-bold ${
          headerBackground ? "bg-[#00B9AE] shadow-black shadow-md" : ""
        }`}
      >
        <div className="flex flex-row space-x-4 w-1/2 text-start">
          <img className="hidden lg:block rounded-image" src={Avatar} />
          <button
            className=" text-sm lg:text-xl hover:text-[#022B3A]"
            onClick={scrollToLanding}
          >
            My Portfolio
          </button>
        </div>
        <div className="flex flex-row justify-between w-1/2">
          <button
            className="hidden lg:block hover:text-[#022B3A]"
            onClick={scrollToAboutMe}
          >
            About Me
          </button>
          <button
            className="hidden lg:block hover:text-[#022B3A]"
            onClick={scrollToExperience}
          >
            Experience
          </button>
          <button
            className="hidden lg:block hover:text-[#022B3A]"
            onClick={scrollToProject}
          >
            Projects
          </button>
          <button
            className="hidden lg:block hover:text-[#022B3A]"
            onClick={scrollToProject}
          >
            Contacts
          </button>
        </div>
        <div className="lg:hidden">
          <Dropdown
            // label="Menu"
            placement="bottom"
            inline
            label={
              <>
                <FaBars />
              </>
            }
            dismissOnClick={false}
          >
            <Dropdown.Item>
              <button
                className="hover:text-[#022B3A]"
                onClick={scrollToAboutMe}
              >
                About Me
              </button>
            </Dropdown.Item>
            <Dropdown.Item>Experience</Dropdown.Item>
            <Dropdown.Item>Projects</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Grow>
  );
};

export default Header;
