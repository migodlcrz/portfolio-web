import { useEffect, useState } from "react";
import "../App.css";
import Avatar from "../images/avatar.png";
import Grow from "@mui/material/Grow";

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(!checked);
  }, []);
  return (
    <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <div className="Header: lavender rounded-full flex flex-row justify-between text-2xl z-10 py-2 px-6  font-bold">
        <div className="flex flex-row space-x-4 w-2/5 text-start">
          <img className="rounded-image" src={Avatar} />
          <h1>My Portfolio</h1>
        </div>
        <div className="flex flex-row justify-between w-3/5">
          <h1>About</h1>
          <h1>Experience</h1>
          <h1>Projects</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </Grow>
  );
};

export default Header;
