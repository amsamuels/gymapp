import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
	console.log(exercises);
	return (
		<div>
			<h1 className="text-white">Showing Results</h1>
			<div>
				{exercises.map((exercise, index) => (
					<p key={exercise} className="text-white">
						{exercise.name}
					</p>
				))}
			</div>
		</div>
	);
};

export default Exercises;
