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
		<div className="fixed w-full h-[100px] z-10 sm:px-16 px-6  py-6 flex justify-center items-center shadow-none bg-black">
			<div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-row justify-between">
				<div className="relative sm:w-[60px] sm:h-[50px] w-[50px] h-[60px] flex cursor-pointer">
					<Link to="/" className="">
						<img src={images.Logo} alt="Logo" className="" />
					</Link>
				</div>
				<div className="flex flex-1 justify-end items-center">
					<div className="md:flex hidden">
						<Stack
							direction="row"
							divider={<Divider orientation="vertical" flexItem />}
							spacing={2}
							className="text-xl font-bold font-hero text-white"
						>
							<Link to="/">Home</Link>
							<Link to="/exercise/:id">Exercise Details</Link>
						</Stack>
					</div>
					<div
						className="md:hidden  justify-center items-center relative text-zinc-400"
						onClick={handleClick}
					>
						{!burger ? (
							<WidgetsOutlinedIcon className="w-10" />
						) : (
							<XIcon className="w-10 " />
						)}
					</div>
				</div>
			</div>
			<div className="md:hidden fixed top-[78px] left-0 right-0 bottom-0 z-20 shadow-lg flex flex-col px-6">
				<div className={!burger ? "hidden" : " flex rounded-md bg-gray-600 "}>
					<motion.div className="flex flex-col justify-center px-2 py-2 items-left">
						<Link to="/" className="">
							<img
								src={images.mobicon}
								alt="Logo"
								className="rounded-md justify-center m-4 w-fit h-[70px]"
							/>
						</Link>
						<Link
							to="/"
							className="m-4 text-white rounded-lg hover:bg-gray-400 text-xl  font-hero"
						>
							Home
						</Link>
						<Link
							to="/exercise/:id"
							className="m-4 text-white rounded-lg hover:bg-gray-400 text-xl font-hero"
						>
							ExerciseDetails
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
