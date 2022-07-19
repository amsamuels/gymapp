import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";

export const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [searchedVideos, setsearchedVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDburl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setsearchedVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDburl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setSimilarExercises(targetMuscleExerciseData);
      const equipmentExerciseData = await fetchData(
        `${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setSimilarEquipment(equipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <div className="py-[100px] flex flex-col bg-black p-10 text-white">
        <Details exerciseDetail={exerciseDetail} />
        <ExerciseVideos
          searchedVideos={searchedVideos}
          name={exerciseDetail.name}
        />
        <SimilarExercises
          similarExercises={similarExercises}
          similarEquipment={similarEquipment}
        />
      </div>
    </>
  );
};
export default ExerciseDetails;
