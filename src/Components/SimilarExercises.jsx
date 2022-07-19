import React from "react";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  return (
    <>
      <div className="">
        {similarExercises.length ? (
          <HorizontalScrollBar data={similarExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <div className="m-2">
        {similarEquipment.length ? (
          <HorizontalScrollBar data={similarEquipment} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default SimilarExercises;
