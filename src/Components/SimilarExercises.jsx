import React from "react";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ similarExercises, similarEquipment }) => {
  return (
    <>
    <div className="space-y-2" >
    <p className=" text-3xl p-2">  Similar <span className=" transform text-red-600">BodyPart</span> exercises</p> 
    <div className="">
        {similarExercises.length !==0 ?( 
          <HorizontalScrollBar data={similarExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
    
      <div>
        <p className=" text-3xl">  Similar <span className=" transform text-red-600">Equipment</span> exercises</p> 
      <div className="">
      {/* If the length of similarEquipment is not equal to 0 show HorizontalScrollBar with similarEquipment data else show loader */}
        {similarEquipment.length !==0 ? (
          <HorizontalScrollBar data={similarEquipment} />
        ) : (
          <Loader />
        )}
      </div>
      </div>
     
    </>
  );
};

export default SimilarExercises;
