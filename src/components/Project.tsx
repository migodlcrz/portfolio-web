import { useState } from "react";
import Sample from "../images/sample.jpg";
import { FaCircle } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

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

const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="Card: flex flex-col space-y-4 h-[90%] p-10 items-start mt-10">
        <h1 className="lavender text-6xl bebas font-bold">Projects</h1>
        <div
          className="flex flex-row bg-#187485 p-5 rounded-2xl"
          // style={{
          //   scrollbarWidth: "thin",
          //   scrollbarColor: "#888 transparent",
          //   WebkitOverflowScrolling: "touch",
          // }}
        >
          <ProjectCard title="Project A" />
          {/* <ProjectCard title="Project B" />
          <ProjectCard title="Project C" />
          <ProjectCard title="Project D" />
          <ProjectCard title="Project E" />
          <ProjectCard title="Project F" />
          <ProjectCard title="Project G" />
          <ProjectCard title="Project H" /> */}
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Project;
