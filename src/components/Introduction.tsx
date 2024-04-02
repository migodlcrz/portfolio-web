import { useEffect, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import { FaCircle } from "react-icons/fa";
import Grow from "@mui/material/Grow";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  const [showFirstTypewriter, setShowFirstTypewriter] = useState(true);
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);
  const [showThirdTypewriter, setShowThirdTypewriter] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(!checked);
    const timer = setTimeout(() => {
      setShowSecondTypewriter(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSecondTypewriter) {
      const timer = setTimeout(() => {
        setShowThirdTypewriter(true);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [showSecondTypewriter]);

  return (
    <div className="flex flex-col items-start mt-6">
      <div>
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <h1 className="lavender text-5xl bebas font-bold">
            Hi, I'm{" "}
            <span style={{ color: "#00B9AE", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Lorenzo",
                  "a Software Engineer",
                  "a Front-end Developer",
                  "a Back-end Developer",
                  "Migo",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </Grow>
      </div>
      <div className=" w-full mt-6">
        <Grow in={checked} {...(checked ? { timeout: 4000 } : {})}>
          <div className="flex flex-col gunmetal mr-28 rounded-2xl h-full px-3 pb-3 items-start shadow-lg shadow-black">
            <div className="Buttons: flex justify-between w-20 py-2">
              <div className="text-red-600 text-md">
                <FaCircle />
              </div>
              <div className="text-yellow-500 ttext-md">
                <FaCircle />
              </div>
              <div className="text-green-600 text-md">
                <FaCircle />
              </div>
            </div>
            <div className="bg-black rounded-xl h-full py-4 px-3 text-start lucida space-y-5 w-full">
              <h1 className="text-white">{"C:\\user>"}</h1>
              {showFirstTypewriter && (
                <h1 className="About Me: text-white">
                  <TypewriterEffect
                    text={
                      "I'm a recent graduate with a passion for full-stack development. During my time in college, I gained valuable experience and knowledge in software engineering principles and practices."
                    }
                  />
                </h1>
              )}
              {showSecondTypewriter && (
                <h1 className="About Me: text-white">
                  <TypewriterEffect
                    text={
                      "Throughout my internship, I had the opportunity to work on various projects, where I honed my skills in both frontend and backend development resulting in proficiency in different technologies."
                    }
                  />
                </h1>
              )}
              {showThirdTypewriter && (
                <h1 className="About Me: text-white">
                  <TypewriterEffect
                    text={
                      "I'm eager to continue learning and growing as a developer, and I'm excited about the prospect of contributing to innovative projects and making a positive impact in the tech industry."
                    }
                  />
                </h1>
              )}
            </div>
          </div>
        </Grow>
      </div>
      <Grow in={checked} {...(checked ? { timeout: 4000 } : {})}>
        <button className="bg-[#1F7A8C] bebas font-bold lavender mt-7 rounded-3xl px-3 py-2 shadow-lg shadow-black">
          Contact Me
        </button>
      </Grow>
    </div>
  );
};

export default Introduction;
