import React from "react";
import { useState } from "react";
import images from "../constants/images";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";

import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { XIcon } from "@heroicons/react/outline";

export const Navbar = () => {
	const [burger, setBurger] = useState(false);
	const handleClick = () => setBurger(!burger);
	return (
		<div className="fixed w-full h-[150px] md:h-[125px] z-10 sm:px-16  py-4 flex justify-center items-center shadow-none bg-black">
			<div className="flex items-center w-full md:flex-row flex-col justify-between md:pl-10 ">
				<div className="relative item-center m-4">
					<Link to="/" className="">
						<img
							src={images.gym}
							alt="Logo"
							className=" w-20 h-18 md:w-22 md:h-22"
						/>
					</Link>
				</div>
				<div className="md:flex hidden justify-center items-center">
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						spacing={2}
						className="text-xl font-bold font-nav text-gray-500"
					>
						<Link to="/">Home</Link>
						<Link to="/exercise/:id">ExerciseDetails</Link>
					</Stack>
				</div>
				<div
					className="md:hidden  items-center  mt-2 mb-4 text-zinc-400"
					onClick={handleClick}
				>
					{!burger ? (
						<WidgetsOutlinedIcon className="w-10" />
					) : (
						<XIcon className="w-10 mt-28" />
					)}
				</div>
				<ul
					className={
						!burger ? "hidden" : " flex flex-col bg-zinc-900 w-full py-6 px-10 "
					}
				>
					<motion.div
						whileInView={{ y: [100, 0] }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						className="flex flex-col justify-center items-center py-10 text-gray-600 bg-blend-lighten font-bold m-4 "
					>
						<Link
							to="/"
							className="p-4
			  rounded-lg hover:bg-gray-400 text-xl font-bold font-nav"
						>
							Home
						</Link>
						<Link
							to="/exercise/:id"
							className="p-4 
			  rounded-lg hover:bg-gray-400 text-xl font-bold font-nav"
						>
							ExerciseDetails
						</Link>
					</motion.div>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
