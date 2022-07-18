import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {
	return (
		<Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetails />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
