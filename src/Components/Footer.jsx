import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className=" flex justify-center items-center w-full h-[100px] bg-black ">
			<div className="flex flex-col p-4">
				<div className="text-white">
					<div className="flex flex-row justify-between items-center p-2 space-x-8">
						<div>
							<Link to="/">Home</Link>
						</div>
						<div>
							<Link to="/exercise/:id">Exercise Details</Link>
						</div>
					</div>
					<div className="capitalize flex flex-row justify-between items-center space-x-12">
						<p>all rights reserved</p>
						<a
							href="https://github.com/amsamuels"
							target="_blank"
							rel="noreferrer noopener"
						>
							<GitHubIcon color="white" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
