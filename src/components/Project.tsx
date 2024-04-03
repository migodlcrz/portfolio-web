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
    <div className="Card: flex flex-col space-y-4 h-[90%] items-start mt-48 lg:mt-20 ">
      <h1 className="lavender text-sm lg:text-6xl bebas font-bold">Projects</h1>
      <div
        className="flex flex-row bg-#187485 rounded-3xl h-auto lg:h-full w-full items-center overflow-x-auto bg-black"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#888 transparent",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* <Carousel slide={false} className="w-full h-[100%] px-20 pb-10"> */}

        <ProjectCard
          title="MRT Administrator Website"
          imageSrc={Sample}
          projLink="https://globaltekrails.onrender.com/"
          description="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem
          quia et culpa inventore qui voluptatem eveniet qui dolores
          distinctio ad adipisci voluptates At magnam voluptatem."
        />
        <ProjectCard
          title="GoGreen Image Processing Thesis"
          imageSrc={Sample}
          projLink="https://globaltekrails.onrender.com/"
          description="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem
          quia et culpa inventore qui voluptatem eveniet qui dolores
          distinctio ad adipisci voluptates At magnam voluptatem."
        />
        <ProjectCard
          title="CS EXPO 2023"
          imageSrc={Sample}
          projLink="https://globaltekrails.onrender.com/"
          description="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem
          quia et culpa inventore qui voluptatem eveniet qui dolores
          distinctio ad adipisci voluptates At magnam voluptatem."
        />
        <ProjectCard
          title="MRT Mobile Application"
          imageSrc={Sample}
          projLink="https://globaltekrails.onrender.com/"
          description="Lorem ipsum dolor sit amet. In iure recusandae non voluptatem
          quia et culpa inventore qui voluptatem eveniet qui dolores
          distinctio ad adipisci voluptates At magnam voluptatem."
        />
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Project;
