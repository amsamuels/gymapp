import React from "react";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  console.log(similarExercises);
  return (
    <div>
      <div>
        {similarExercises.length ? (
          <HorizontalScrollBar data={similarExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimilarExercises;
