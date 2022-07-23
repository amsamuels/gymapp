import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" flex flex-row justify-center items-center w-22 ">
      <PulseLoader color="gray"/>
    </div>
  );
};

export default Loader;
