import { useEffect, useState } from "react";
import "../App.css";
import Avatar from "../images/avatar.png";
import Grow from "@mui/material/Grow";

interface HeaderProps {
  scrollToAboutMe: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToAboutMe }) => {
  const [checked, setChecked] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    setChecked(!checked);
    window.addEventListener("scroll", handleScroll); // Add event listener for scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove event listener on component unmount
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBackground(true); // Set headerBackground to true if scrolled down
    } else {
      setHeaderBackground(false); // Set headerBackground to false if scrolled to top
    }
  };

  return (
    <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div
        className={`Header: lavender rounded-full flex flex-row justify-between fixed text-2xl z-10 py-2 px-2 pr-4 font-bold w-[81%] ${
          headerBackground ? "bg-[#00B9AE] shadow-black shadow-md" : ""
        }`}
      >
        <div className="flex flex-row space-x-4 w-2/5 text-start">
          <img className="rounded-image" src={Avatar} />
          <button className="hover:text-[#022B3A]">My Portfolio</button>
        </div>
        <div className="flex flex-row justify-between w-3/5">
          <button className="hover:text-[#022B3A]" onClick={scrollToAboutMe}>
            About Me
          </button>
          <button className="hover:text-[#022B3A]">Experience</button>
          <button className="hover:text-[#022B3A]">Projects</button>
          <button className="hover:text-[#022B3A]">Contact</button>
        </div>
      </div>
    </Grow>
  );
};

export default Header;
