import { useEffect, useState } from "react";
import "../App.css";
import Avatar from "../images/avatar.png";
import Grow from "@mui/material/Grow";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

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
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile

  useEffect(() => {
    setChecked(!checked);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Listen for resize changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  const handleResize = () => {
    // Check if the screen width is below a certain size (e.g., 768px for tablets)
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div
        className={`Header: lavender flex flex-row justify-between fixed text-2xl z-10 p-6 pr-10 w-full font-bold ${
          headerBackground ? "bg-[#00B9AE] shadow-black shadow-md" : ""
        }`}
      >
        <div className="flex flex-row space-x-4 w-2/5 text-start">
          <img className="rounded-image" src={Avatar} />
          {isMobile ? ( // Render hamburger icon for mobile
            <FaBars
              onClick={scrollToLanding}
              className="text-[#022B3A] cursor-pointer"
            />
          ) : (
            <button className="hover:text-[#022B3A]" onClick={scrollToLanding}>
              My Portfolio
            </button>
          )}
        </div>
        {isMobile ? null : ( // Don't render the rest of the menu for mobile
          <div className="flex flex-row justify-between w-3/5">
            <button className="hover:text-[#022B3A]" onClick={scrollToAboutMe}>
              About Me
            </button>
            <button
              className="hover:text-[#022B3A]"
              onClick={scrollToExperience}
            >
              Experience
            </button>
            <button className="hover:text-[#022B3A]" onClick={scrollToProject}>
              Projects
            </button>
            <button className="hover:text-[#022B3A]">Contact</button>
          </div>
        )}
      </div>
    </Grow>
  );
};

export default Header;
