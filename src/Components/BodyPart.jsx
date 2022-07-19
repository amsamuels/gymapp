import React from "react";
import { Stack, Typography } from "@mui/material";
import images from "../constants/images";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <>
      <div
        className={
          bodyPart === item
            ? "border-t-4 border-red-700 justify-center items-center text-center m-6 rounded-lg border-4  w-[150px] h-[160px]   inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300 "
            : "justify-center items-center text-center m-6 rounded-lg border-4  w-[150px] h-[160px]  inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
        }
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <p className="capitalize font-nav">{item}</p>
        <img src={images.bar} className=" w-[126px] h-[115px]" />
      </div>
    </>
  );
};

export default BodyPart;
