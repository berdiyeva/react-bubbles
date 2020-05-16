import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	const [savedList, setSavedList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	const getMovieList = () => {
		axiosWithAuth()
			.get("api/colors")
			.then((res) => setColorList(res.data))
			.catch((err) => console.log(err.response));
	};
	useEffect(() => {
		getMovieList();
	}, []);

	return (
		<>
			{/* <h2>Colors are Here!</h2> */}
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
