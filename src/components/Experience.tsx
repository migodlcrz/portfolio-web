import AboutPanel from "./AboutPanel";
import { FaCircle, FaMobile, FaShareNodes } from "react-icons/fa6";
import Icon from "./Icon";
import HtmlLogo from "../images/html.png";
import CSSLogo from "../images/css.png";
import JavaScriptLogo from "../images/javascript.png";
import CplusplusLogo from "../images/c++.png";
import PythonLogo from "../images/python.png";
import JavaLogo from "../images/java.png";
import NodeLogo from "../images/node.png";
import ReactLogo from "../images/react.png";
import VueLogo from "../images/vue.png";
import ExpressLogo from "../images/express.png";
import MongoLogo from "../images/mongodb.png";

const Experience = () => {
  return (
    <div className="Card: flex flex-col space-y-4 rounded-2xl h-[90%] lg:px-10 lg:py-10 items-start mt-10">
      <div className="">
        <h1 className="lavender text-sm lg:text-6xl bebas font-bold">
          Experiences
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full lg:space-x-10">
        <div className="gunmetal w-full lg:w-1/3 h-[90%] px-3 pb-12 pt-1 rounded-3xl shadow-md shadow-black">
          <div className="Buttons: flex justify-between w-20 pt-2">
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
          <div
            className="grid grid-cols-3 gap-4 overflow-y-auto max-h-full bg-black py-6 px-6 pt-6 mt-2 rounded-2xl"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#888 transparent",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Icon name="HTML" imageUrl={HtmlLogo} height="10" width="12" />
            <Icon name="CSS" imageUrl={CSSLogo} height="10" width="7" />
            <Icon
              name="Javascript"
              imageUrl={JavaScriptLogo}
              height="10"
              width="7"
            />
            <Icon name="C++" imageUrl={CplusplusLogo} height="10" width="10" />
            <Icon name="Python" imageUrl={PythonLogo} height="10" width="10" />
            <Icon name="Java" imageUrl={JavaLogo} height="7" width="16" />
            <Icon name="Node" imageUrl={NodeLogo} height="10" width="9" />
            <Icon name="React" imageUrl={ReactLogo} height="10" width="10" />
            <Icon name="Vue" imageUrl={VueLogo} height="9" width="10" />
            <Icon
              name="Express"
              imageUrl={ExpressLogo}
              height="10"
              width="10"
            />
            <Icon name="MongoDB" imageUrl={MongoLogo} height="8" width="10" />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <AboutPanel
            title="Machine Learning Developer"
            text="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia et culpa inventore qui voluptatem eveniet qui dolores distinctio ad adipisci voluptates At magnam voluptatem. Eum nostrum ipsam nam quis vitae ut accusamus commodi et ratione aspernatur."
            icon={FaShareNodes}
          />
          <AboutPanel
            title="Mobile Developer"
            text="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia et culpa inventore qui voluptatem eveniet qui dolores distinctio ad adipisci voluptates At magnam voluptatem. Eum nostrum ipsam nam quis vitae ut accusamus commodi et ratione aspernatur."
            icon={FaMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
