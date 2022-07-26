import React, { useContext } from "react";

import Card from "../components/Card";
import "../pages/home.css";
import { CoursesContext } from "../index";

const Home = () => {
	let courses = useContext(CoursesContext);
	let coursesJson = JSON.stringify(courses);
	console.log(coursesJson);

	!localStorage.getItem("courses")
		? localStorage.setItem("courses", coursesJson)
		: (courses = JSON.parse(localStorage.getItem("courses")));
	console.log(courses);
	return (
		<>
			<div className='home'>
				{courses.map((course) => (
					<>
						<Card key={course.id} course={course} />
					</>
				))}
			</div>
		</>
	);
};

export default Home;
