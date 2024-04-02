import { useState } from "react";
import Sample from "../images/sample.jpg";
import Avatar from "../images/avatar.png";
import { FaCircle } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Carousel } from "flowbite-react";

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
    <div className="Card: flex flex-col space-y-4 h-[90%] items-start mt-20">
      <h1 className="lavender text-6xl bebas font-bold">Projects</h1>
      <div className="flex flex-row bg-#187485 rounded-2xl h-full">
        <Carousel slide={false} className="w-full h-[100%] px-20 pb-10">
          <ProjectCard title="Project A" imageSrc={Sample} />
          <ProjectCard title="Project B" imageSrc={Sample} />
          <ProjectCard title="Project C" imageSrc={Sample} />
          <ProjectCard title="Project D" imageSrc={Sample} />
          <button className="lavender font-bold text-2xl hover:text-black">
            See more Projects {">>"}
          </button>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
