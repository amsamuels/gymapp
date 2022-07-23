import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import images from "../constants/images";

const LeftArrow = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 500;
};

const RightArrow = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 500;
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div className="relative flex justify-center items-center text-white">
      <img
        src={images.leftarrow}
        className=" hidden md:block p-4 cursor-pointer text-zinc-400 "
        onClick={LeftArrow}
      />

      <div
        id="slider"
        className="xl:w-[950px] lg:w-[800px] md:w-[630px] w-[370px] h-full mx-2 overflow-x-scroll scroll  space-x-10 flex  flex-row whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {data.map((item) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className=""
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </div>
        ))}
      </div>
      <img
        src={images.rightarrow}
        className="hidden md:block p-4 cursor-pointer hover:opacity-100"
        onClick={RightArrow}
      />
    </div>
  );
};

export default HorizontalScrollBar;
