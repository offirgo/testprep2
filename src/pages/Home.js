import React, { useState } from "react";
import { getCoursesFromFirebase } from "../backend/firebase/courseData";

import Card from "../components/Card";
import "../pages/home.css";

const Home = () => {
	let [courses, setCourses] = useState([]);
	if (!courses || courses.length === 0) {
		getCoursesFromFirebase(setCourses);
	}
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
