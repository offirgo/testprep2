import React from "react";

import { courses } from "../data";
import Card from "../components/Card";
import "../pages/home.css";

const Home = () => {
	return (
		<div className='home'>
			{courses.map((course) => (
				<Card key={course.id} course={course} />
			))}
		</div>
	);
};

export default Home;
