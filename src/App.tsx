import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import { useEffect, useState } from "react";
import Pictures from "./components/Pictures";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

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

  useEffect(() => {
    setChecked(!checked);
  }, []);

  return (
    <div className="App">
      <Header />
      <div
        id="introductionSection"
        className="First Panel: lg:hidden w-full h-auto pt-10 pb-2 px-6 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <div className="Card: flex flex-col lg:flex-row my-10 h-[80%]">
          <div className="w-full lg:w-1/3 h-80 gunmetal rounded-xl p-2 shadow-lg shadow-black animate__animated animate__backInRight">
            <Pictures />
          </div>
        </div>
      </div>
      <div
        id="introductionSection"
        className="First Panel: w-full h-screen py-1 px-6 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <div className="Card: flex flex-col lg:flex-row my-10 lg:mt-20 h-[80%]">
          <div className="flex flex-col w-full lg:w-2/3 items-start">
            <Introduction />
          </div>
          <div className="w-full lg:w-1/3 hidden lg:block mt-10 gunmetal rounded-xl p-2 shadow-lg shadow-black animate__animated animate__backInRight">
            <Pictures />
          </div>
        </div>
      </div>
      <div
        id="aboutSection"
        className="Second Panel: w-full h-screen py-2 px-6 lg:mt-10 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <About />
      </div>
      <div
        id="experienceSection"
        className="Third Panel: w-full h-screen py-2 px-6 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Experience />
      </div>
      <div
        id="projectSection"
        className="Fourth Panel: w-full h-screen py-10 px-6 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Project />
      </div>
      <div id="contactSection">
        <Footer />
      </div>
    </div>
  );
};

export default App;
