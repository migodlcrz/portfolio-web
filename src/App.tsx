import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import { useEffect, useRef, useState } from "react";
import Pictures from "./components/Pictures";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "animate.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const LandingRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const ExperienceRef = useRef<HTMLDivElement>(null);
  const ProjectRef = useRef<HTMLDivElement>(null);

  const scrollToLanding = () => {
    LandingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    ExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setChecked(!checked);
  }, []);

  return (
    <div className="App">
      <Header
        scrollToLanding={scrollToLanding}
        scrollToAboutMe={scrollToAboutMe}
        scrollToExperience={scrollToExperience}
        scrollToProject={scrollToProject}
      />
      <div
        ref={LandingRef}
        className="First Panel: w-full h-screen py-10 px-10 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <div className="Card: flex flex-col lg:flex-row my-10 h-[80%]">
          <div className="flex flex-col w-full lg:w-2/3 items-start">
            <Introduction />
          </div>
          <div className="w-full hidden lg:block lg:w-1/3 mt-10 gunmetal rounded-xl p-2 shadow-lg shadow-black animate__animated animate__backInRight">
            <Pictures />
          </div>
        </div>
      </div>
      <div
        ref={aboutMeRef}
        className="Second Panel: w-full h-screen py-10 px-10 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <About />
      </div>
      <div
        ref={ExperienceRef}
        className="Third Panel: w-full h-screen py-10 px-10 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Experience />
      </div>
      <div
        ref={ProjectRef}
        className="Fourth Panel: w-full h-screen py-10 px-10 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Project />
      </div>
      <Footer />
    </div>
  );
};

export default App;
