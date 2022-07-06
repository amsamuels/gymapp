import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
	const [currentPage, setcurrentPage] = useState(1);
	const exercisesPerPage = 8;

	const indexOfLastExercise = currentPage * exercisesPerPage;

	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

	const currentExercise = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);
	const paginate = (e, value) => {
		setcurrentPage(value);

		window.scrollTo({ top: 1900, behavior: "smooth" });
	};

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === "all") {
				exercisesData = await fetchData(
					"https://exercisedb.p.rapidapi.com/exercises",
					exerciseOptions
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
			}
			setExercises(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart]);

	return (
		<>
			<div className="w-full h-fit bg-black p-6">
				<h1 className="text-white text-2xl font-bold  flex items-center justify-center">
					Showing Results
				</h1>
				<div className="flex flex-wrap justify-center p-8">
					{currentExercise.map((exercise, index) => (
						<ExerciseCard key={index} exercise={exercise} />
					))}
				</div>
			</div>
			<div className="m-4 flex items-center justify-center ">
				{exercises.length > exercisesPerPage && (
					<Pagination
						color="standard"
						shape="rounded"
						size="large"
						defaultPage={1}
						page={currentPage}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						onChange={paginate}
						className="bg-white md:flex items-center justify-center md:w-[400px] h-[55px]  w-[300px] p-2 rounded-md"
					/>
				)}
			</div>
		</>
	);
};

export default Exercises;
