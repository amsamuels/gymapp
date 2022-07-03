import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import BodyPart from "./BodyPart";
import images from "../constants/images";

const LeftArrow = () => {
	let slider = document.getElementById("slider");
	slider.scrollLeft = slider.scrollLeft - 500;
};

const RightArrow = () => {
	let slider = document.getElementById("slider");
	slider.scrollLeft = slider.scrollLeft + 500;
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
	return (
		<div className="relative flex items-center text-white">
			<img
				src={images.leftarrow}
				className=" hidden md:block p-4 cursor-pointer text-zinc-400 "
				onClick={LeftArrow}
			/>

			<div
				id="slider"
				className="xl:w-[950px] lg:w-[800px] md:w-[630px] w-[370px] h-full mx-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
			>
				{data.map((item) => (
					<div
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						className={
							bodyPart === item
								? "border-t-4 border-red-700 justify-center items-center text-center m-6 rounded-lg border-4 w-32  inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300 "
								: "justify-center items-center text-center m-6 rounded-lg border-4 w-32  inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
						}
						onClick={() => {
							setBodyPart(item);
							window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
						}}
					>
						<p className="capitalize font-nav">{item}</p>
						<img src={images.bar} />
					</div>
				))}
			</div>
			<img
				src={images.rightarrow}
				className="hidden md:block -4 cursor-pointer hover:opacity-100"
				onClick={RightArrow}
			/>
		</div>
	);
};

export default HorizontalScrollBar;
