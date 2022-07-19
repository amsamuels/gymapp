import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";

import images from "../constants/images";

const SearchExer = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handlesearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center  lg:p-[30px] md:p-[20px] p-[10px] ">
      <div className="">
        <img
          src={images.backimg}
          className="xl:w-full xl:h-1/2 lg:w-full lg:h-96 md:w-full md:h-80 w-full h-48 "
        />
      </div>
      <div className=" flex flex-row  justify-center items-center p-6">
        <input
          className="rounded-lg xl:w-96 lg:w-72 md:w-60 w-48 h-8 md:h-10 p-2 m-2 bg-gray-100"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="flex xl:w-64 lg:w-44 md:w-32 w-24 md:h-10 h-8 "
          sx={{
            bgcolor: "#3b22a8",
            color: "#ffffff",
            position: "flex",
            variant: "contained",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handlesearch}
        >
          Search
        </Button>
      </div>
      <div>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchExer;
