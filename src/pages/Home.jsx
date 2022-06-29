import React, { useState } from "react";
import Exercises from "../Components/Exercises";
import HeroBanner from "../Components/HeroBanner";
import SearchExer from "../Components/SearchExer";

export const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);
	return (
		<div className=" flex justify-center items-center sm:px-12 p-6 sm:pb-16 xs:pb-8 pb-12 bg-black overflow-x-hidden">
			<div className="flex justify-center items-center w-full pt-[120px] flex-col  ">
				<HeroBanner />
				<SearchExer
					setExercises={setExercises}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>
				<Exercises
					exercises={exercises}
					setExercises={setExercises}
					bodyPart={bodyPart}
				/>
			</div>
		</div>
	);
};
export default Home;
