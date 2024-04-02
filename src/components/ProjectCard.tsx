import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2a3439",
  boxShadow: 24,
  p: 4,
  borderRadius: "xl",
};

interface ProjectCardProps {
  title: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="h-full px-8">
        <div className="flex flex-row gunmetal space-x-4 rounded-3xl p-4 w-full h-full mr-10 mb-5">
          <div className="image-container rounded-2xl w-1/2 h-full overflow-hidden">
            <img
              src={imageSrc}
              alt="Loading Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div>
              <h1 className="lavender font-bold bebas text-xl text-start">
                {title}
              </h1>
              <p className="lavender font-normal bebas text-md text-justify">
                Lorem ipsum dolor sit amet. In iure recusandae non voluptatem
                quia et culpa inventore qui voluptatem eveniet qui dolores
                distinctio ad adipisci voluptates At magnam voluptatem. Lorem
                ipsum dolor sit amet. In iure recusandae non voluptatem quia et
                culpa inventore qui voluptatem eveniet qui dolores distinctio ad
                adipisci voluptates At magnam voluptatem. Lorem ipsum dolor sit
                amet. In iure recusandae non voluptatem quia et culpa inventore
                qui voluptatem eveniet qui dolores distinctio ad adipisci
                voluptates At magnam voluptatem.
              </p>
            </div>
            <div>
              <div className="lavender text-start font-bold">Tools used:</div>
              <div className="grid grid-cols-3 gap-3 w-full py-3">
                <div className="flex flex-row space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-lg shadow-black">
                  <div className="text-xs text-blue-600">
                    <FaCircle />
                  </div>
                  <span>React</span>
                </div>
                <div className="flex flex-row space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-lg shadow-black">
                  <div className="text-xs text-green-600">
                    <FaCircle />
                  </div>
                  <span>ExpressJS</span>
                </div>
                <div className="flex flex-row  space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-lg shadow-black">
                  <div className="text-xs text-green-900">
                    <FaCircle />
                  </div>
                  <span>MongoDB</span>
                </div>
                <div className="flex flex-row  space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-lg shadow-black">
                  <div className="text-xs text-yellow-600">
                    <FaCircle />
                  </div>
                  <span>Node</span>
                </div>
              </div>
            </div>
            <a
              href="https://globaltekrails.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2da1ad] lavender font-bold text-black shadow-lg shadow-black w-28 py-1 px-2 text-center rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
