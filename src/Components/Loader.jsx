import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
const Loader = () => {
  return (
    <div className=" flex flex-row justify-center items-center w-22 ">
      <PulseLoader />
    </div>
  );
};
export default Loader;
