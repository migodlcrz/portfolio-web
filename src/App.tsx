import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { useEffect, useRef, useState } from "react";
import Pictures from "./components/Pictures";
import About from "./components/About";
import AboutPanel from "./components/AboutPanel";
import { FaMobile, FaShareNodes } from "react-icons/fa6";
import Icon from "./components/Icon";
import HtmlLogo from "../src/images/html.png";
import CSSLogo from "../src/images/css.png";
import JavaScriptLogo from "../src/images/javascript.png";
import CplusplusLogo from "../src/images/c++.png";
import PythonLogo from "../src/images/python.png";
import Experience from "./components/Experience";

const App = () => {
  const [checked, setChecked] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setChecked(!checked);
  }, []);

  return (
    <div className="App">
      <div
        className="First Panel: w-full h-screen py-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Header scrollToAboutMe={scrollToAboutMe} />
        <div className="Card: flex flex-row my-10 h-[80%]">
          <div className="flex flex-col w-2/3 items-start">
            <Introduction />
          </div>
          <div className="w-1/3 mt-10 bg-slate-400 rounded-xl p-2 shadow-lg shadow-black">
            <Pictures />
          </div>
        </div>
      </div>
      <div
        ref={aboutMeRef}
        className="Second Panel: w-full h-screen py-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        <About />
      </div>
      <div
        className="Third Panel: w-full h-screen py-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Experience />
      </div>
    </div>
  );
};

export default App;
