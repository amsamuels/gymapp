import React from "react";
import images from "../constants/images";

export const HeroBanner = () => {
	return (
		<div className="flex md:flex-row flex-col justify-center items-center lg:p-[30px] md:p-[20px] p-[20px]  ">
			<div className="flex flex-col justify-center items-center lg:mb-20 xl:pr-8 lg:pr-6 md:pr-3">
				<p className="font-hero font-bold text-white xl:text-8xl lg:text-4xl md:text-2xl text-3xl xl:pt-0 lg:pt-0 md:pt-0 pt-6 pb-2">
					Fitness Vogue
				</p>
				<h1 className="font-nav text-center text-white xl:text-3xl lg:text-xl lg:mx-2 pb-2 ">
					LET PAIN BUILD YOU
				</h1>
				<p className="font-header leading-1 text-center text-white pb-2">
					Find the most optimal exercises to build Muscle below
				</p>
				<div className="pt-2 pb-4">
					<a
						href="#exercises"
						className="p-2 px-4 pt-2 md:px-7 font-bold bg-white rounded-lg  hover:bg-gray-200  "
					>
						Explore Exercises
					</a>
				</div>
				<div className="p-4">
					<img
						src={images.quote}
						alt="Logo"
						className="rounded-lg border-8 w-fit h-42  "
					/>
				</div>
			</div>
			<div className="pb-6 ">
				<img
					src={images.heroimg}
					alt="Logo"
					className="rounded-bl-3xl w-fit h-96 md:w-fit md:h-5/6 "
				/>
			</div>
		</div>
	);
};

export default HeroBanner;
