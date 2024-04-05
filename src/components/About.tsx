import { HiCursorArrowRays } from "react-icons/hi2";
import { BsServer } from "react-icons/bs";
import { FaShareNodes } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";

import AboutPanel from "./AboutPanel";

const About = () => {
  return (
    <div className="Card: flex flex-col space-y-4 gunmetal rounded-2xl shadow-lg shadow-black h-[75%] p-10 items-start mt-36 lg:mt-20">
      <div className="">
        <h1 className="lavender text-lg lg:text-6xl bebas font-bold">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full lg:space-x-10 overflow-y-auto max-h-full">
        <div className="w-full lg:w-1/2 ">
          <AboutPanel
            title="Front-End Developer"
            text="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia et culpa inventore qui voluptatem eveniet qui dolores distinctio ad adipisci voluptates At magnam voluptatem. Eum nostrum ipsam nam quis vitae ut accusamus commodi et ratione aspernatur."
            icon={HiCursorArrowRays}
          />
          <AboutPanel
            title="Back-End Developer"
            text="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia et culpa inventore qui voluptatem eveniet qui dolores distinctio ad adipisci voluptates At magnam voluptatem. Eum nostrum ipsam nam quis vitae ut accusamus commodi et ratione aspernatur."
            icon={BsServer}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutPanel
            title="ML Developer"
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

export default About;
