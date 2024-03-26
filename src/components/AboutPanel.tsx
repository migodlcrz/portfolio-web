import { IconType } from "react-icons";
import { HiCursorArrowRays } from "react-icons/hi2";

interface AboutPanelProps {
  title: string;
  text: string;
  icon: IconType;
}

const AboutPanel: React.FC<AboutPanelProps> = ({ title, text, icon: Icon }) => {
  return (
    <div className="flex flex-col h-1/2">
      <h1 className="flex flex-row justify-center items-center space-x-4 lavender text-4xl font-bold">
        <span className="text-[#00B9AE]">
          <Icon />
        </span>
        <span>{title}</span>
      </h1>
      <p className="lavender bebas mt-4">{text}</p>
    </div>
  );
};

export default AboutPanel;
