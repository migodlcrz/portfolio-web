import { useState } from "react";
import Sample from "../images/sample.jpg";
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex flex-col space-y-4 gunmetal p-5 rounded-3xl max-w-xs mr-10 mt-5"
      >
        <img
          src={Sample}
          alt="Loading Picture"
          className="w-full h-36 rounded-2xl"
        />
        <div className="flex flex-col ">
          <h1 className="lavender font-bold bebas text-xl text-start">
            {title}
          </h1>
          <p className="lavender font-normal bebas text-md text-justify">
            Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia
            et culpa inventore qui voluptatem eveniet qui dolores distinctio ad
            adipisci voluptates At magnam voluptatem.
          </p>
          <div className="grid grid-cols-3 gap-3 w-full py-3">
            <div className="flex flex-row bg-[#00B9AE] rounded-xl px-2 text-sm items-center justify-center shadow-lg shadow-black">
              <div className="text-xs text-blue-600">
                <FaCircle />
              </div>
              <span>React</span>
            </div>
            <div className="flex flex-row bg-[#00B9AE] rounded-xl px-2 text-sm items-center justify-center shadow-lg shadow-black">
              <div className="text-xs text-green-600">
                <FaCircle />
              </div>
              <span>ExpressJS</span>
            </div>
            <div className="flex flex-row bg-[#00B9AE] rounded-xl px-2 text-sm items-center justify-center shadow-lg shadow-black">
              <div className="text-xs text-green-900">
                <FaCircle />
              </div>
              <span>MongoDB</span>
            </div>
            <div className="flex flex-row bg-[#00B9AE] rounded-xl px-2 text-sm items-center justify-center shadow-lg shadow-black">
              <div className="text-xs text-yellow-600">
                <FaCircle />
              </div>
              <span>Node</span>
            </div>
          </div>
        </div>
      </button>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={Sample}
            alt="Loading Picture"
            className="w-full h-36 rounded-2xl"
          />
          <Typography
            id="modal-modal-title"
            className="text-white font-bold"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            className="text-white"
            sx={{ mt: 2 }}
          >
            Lorem ipsum dolor sit amet. In iure recusandae non voluptatem quia
            et culpa inventore qui voluptatem eveniet qui dolores distinctio ad
            adipisci voluptates At magnam voluptatem.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCard;
