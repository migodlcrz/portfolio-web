import React from "react";

interface IconProps {
  name: string;
  imageUrl: string;
  height: string;
  width: string;
}

const Icon: React.FC<IconProps> = ({ name, imageUrl, height, width }) => {
  return (
    <div className="flex flex-col mb-4 mr-4 justify-center items-center space-y-2">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center rounded-full p-2 bg-[#E1E5F2] h-16 w-16 border-4 border-green-400">
          <img src={imageUrl} alt={name} className={`h-${height} w-${width}`} />
        </div>
      </div>
      <h1 className="lavender text-md font-bold bebas">{name}</h1>
    </div>
  );
};

export default Icon;
