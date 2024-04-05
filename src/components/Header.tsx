import { useEffect, useState } from "react";
import "../App.css";
import Icon from "../images/avatar.png";
import { Avatar } from "flowbite-react";
import Grow from "@mui/material/Grow";
import { FaBars } from "react-icons/fa";
import { Dropdown } from "flowbite-react";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  const scrollToIntroduction = () => {
    const aboutSection = document.getElementById("introductionSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const aboutSection = document.getElementById("experienceSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    const aboutSection = document.getElementById("projectSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const aboutSection = document.getElementById("contactSection");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="flex flex-row space-x-4 w-full lg:w-1/2 text-start">
          <Avatar img={Icon} alt="avatar of Jese" rounded />
          <button
            onClick={scrollToIntroduction}
            className="hover:text-[#022B3A]"
          >
            My Portfolio
          </button>
        </div>
        <div className="lg:flex lg:flex-row hidden lg:block justify-between w-1/2">
          <button
            onClick={scrollToAbout}
            className="hidden lg:block hover:text-[#022B3A]"
          >
            About Me
          </button>
          <button
            onClick={scrollToExperience}
            className="hidden lg:block hover:text-[#022B3A]"
          >
            Experience
          </button>
          <button
            onClick={scrollToProject}
            className="hidden lg:block hover:text-[#022B3A]"
          >
            Projects
          </button>
          <button
            onClick={scrollToContact}
            className="hidden lg:block hover:text-[#022B3A]"
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
              <button className="hover:text-[#022B3A]">About Me</button>
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
