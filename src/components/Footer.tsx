import { useEffect, useState } from "react";
import "../App.css";
import Avatar from "../images/avatar.png";
import Grow from "@mui/material/Grow";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className=" flex flex-col lg:flex-row text-white items-center w-full text-center lg:py-20 lg:px-48"
      style={{
        backgroundImage: "linear-gradient(to right, #255069, #183e54, #0f3c57",
      }}
    >
      <div className="flex flex-col w-1/2 items-center">
        <h1 className="lavender font-bold text-8xl">Contact Me!</h1>
        <h2 className="lavender font-bold text-2xl">Feel free to reach out!</h2>
      </div>
      <div className=" flex flex-col w-1/2 text-2xl items-center justify-center">
        <div className="flex flex-row space-x-1 lavender font-bold items-center justify-center">
          <h1>
            <BiLogoGmail />
          </h1>
          <h1>: lorenzo.cap.delacruz@gmail.com</h1>
        </div>
        <div className="flex flex-row space-x-2  lavender font-bold items-center justify-center">
          <h1>
            <AiFillLinkedin />
          </h1>
          <h1>: LinkedIn</h1>
        </div>
        <div className="flex flex-row space-x-2  lavender font-bold items-center justify-center">
          <h1>
            <AiFillGithub />
          </h1>
          <h1>: Github</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
