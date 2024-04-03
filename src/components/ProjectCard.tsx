import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { Carousel } from "flowbite-react";

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
  projLink: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  projLink,
  description,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="px-4 items-center">
        <button
          onClick={() => setOpenModal(!openModal)}
          className="flex flex-col gunmetal rounded-3xl space-y-2 p-4 w-72 h-[450px] shadow-md shadow-black hover:scale-105 transition duration-300 ease-in-out"
        >
          <div className="image-container rounded-2xl overflow-hidden">
            <img
              src={imageSrc}
              alt="Loading Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="lavender font-bold bebas text-xl text-start">
                {title}
              </h1>
              <p className="lavender font-normal bebas text-md text-justify">
                {description}
              </p>
            </div>

            <Modal show={openModal}>
              <Modal.Header className="gunmetal">
                <label className="lavender">{title}</label>
              </Modal.Header>
              <Modal.Body className="gunmetal space-y-4">
                <div className="image-container rounded-2xl h-[300px]">
                  <Carousel
                    className="w-full h-[100%]"
                    leftControl="."
                    rightControl="."
                    slideInterval={2000}
                  >
                    <img
                      src={imageSrc}
                      alt="Loading Picture"
                      className="w-full h-full object-cover"
                    />
                    <img
                      src={imageSrc}
                      alt="Loading Picture"
                      className="w-full h-full object-cover"
                    />
                    <img
                      src={imageSrc}
                      alt="Loading Picture"
                      className="w-full h-full object-cover"
                    />
                  </Carousel>
                </div>
                <p className="lavender font-normal bebas text-md text-justify">
                  {description}
                </p>
                <div className="space-y-6">
                  <div>
                    <div className="lavender text-start font-bold">
                      Tools used:
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-full py-3">
                      <div className="flex flex-row space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-md shadow-black">
                        <div className="text-xs text-blue-600">
                          <FaCircle />
                        </div>
                        <span>React</span>
                      </div>
                      <div className="flex flex-row space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-md shadow-black">
                        <div className="text-xs text-green-600">
                          <FaCircle />
                        </div>
                        <span>ExpressJS</span>
                      </div>
                      <div className="flex flex-row  space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-md shadow-black">
                        <div className="text-xs text-green-900">
                          <FaCircle />
                        </div>
                        <span>MongoDB</span>
                      </div>
                      <div className="flex flex-row  space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-md shadow-black">
                        <div className="text-xs text-yellow-600">
                          <FaCircle />
                        </div>
                        <span>Node</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="gunmetal">
                <a
                  href={projLink}
                  target="_blank"
                  className="flex flex-row  space-x-2 bg-[#2da1ad] rounded-3xl py-1 px-2 text-sm items-center justify-center shadow-md shadow-black lavender font-bold hover:scale-110 transition duration-300 ease-in-out"
                >
                  See Project
                </a>
              </Modal.Footer>
            </Modal>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
