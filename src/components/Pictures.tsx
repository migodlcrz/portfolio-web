import { Carousel } from "flowbite-react";
import Carousel1 from "../images/carousel1.jpg";
import Carousel2 from "../images/carousel2.jpg";
import Carousel3 from "../images/carousel3.jpg";

const Pictures = () => {
  return (
    <>
      <Carousel className="w-full h-[100%]">
        <img src={Carousel2} />
        <img src={Carousel1} />
        <img src={Carousel3} />
      </Carousel>
    </>
  );
};

export default Pictures;
