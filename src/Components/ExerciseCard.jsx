import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
	return (
		<>
			<Link to={`/exercise/${exercise.id}`}>
				<div className="flex flex-col bg-white rounded-lg jusify-center items-center shadow-md md:w-52 w-fit h-[285px] p-2 md:m-6 my-4 m-0  overflow-hidden">
					<img
						src={exercise.gifUrl}
						alt={exercise.name}
						loading="Lazy"
						className=" w-[200px] h-[160px]"
					/>
					<div className="flex flex-row">
						<button className="m-2 p-2 px-2 text-xs text-center font-bold capitalize bg-black text-white rounded-lg  hover:bg-gray-200  ">
							{exercise.bodyPart}
						</button>
						<button className="m-2 p-2 px-2 text-xs text-center font-bold capitalize bg-black text-white rounded-lg  hover:bg-gray-200  ">
							{exercise.target}
						</button>
					</div>
					<p className="p-2 h-[40px]   text-xs font-medium capitalize jusify-center text-center">
						{exercise.name}
					</p>
				</div>
			</Link>
		</>
	);
};

export default ExerciseCard;
