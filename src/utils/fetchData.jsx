export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "628cfc0375msh64bb3c2e1a68a80p173ceejsnebc830bef59e",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
