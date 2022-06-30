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
		<div className="fixed w-full h-[125px] z-10 sm:px-16 px-6 py-4 flex justify-center items-center shadow-none bg-black">
			<div className="flex items-center w-full md:flex-row flex-col justify-between pt-12">
				<div className="relative items-center m-4">
					<Link to="/" className="">
						<img
							src={images.Logo}
							alt="Logo"
							className=" w-20 h-18 md:w-full md:h-28"
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
					className="md:hidden  items-center mt-2 mb-4 text-zinc-400"
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
						!burger ? "hidden" : "rounded-md bg-zinc-900 w-[310px] py-4 px-4"
					}
				>
					<motion.div
						whileInView={{ y: [100, 0] }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						className="flex flex-col justify-center items-center py-4 text-white bg-blend-lighten m-2"
					>
						<Link to="/" className="">
							<img
								src={images.Logo}
								alt="Logo"
								className="rounded-md m-2 justify-center w-[70px] h-[70px]"
							/>
						</Link>
						<Link
							to="/"
							className="p-4 rounded-lg hover:bg-gray-400 text-xl  font-hero"
						>
							Home
						</Link>
						<Link
							to="/exercise/:id"
							className="p-4 rounded-lg hover:bg-gray-400 text-xl font-hero"
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
