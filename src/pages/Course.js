import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LessonTopicsCard from "../components/LessonTopicsCard";
import "./course.css";

import { courses } from "../backend/firebase/courseData";

const Course = () => {
	//let [course, setCourse] = useState([]);
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	let course = courses.find((c) => c.name.toString() === path);
	let lessonTopicsMap = course.lessonTopics;
	let lessonTopicsKeys = Object.keys(lessonTopicsMap);
	let lessonTopicsValues = Object.values(lessonTopicsMap);

	console.log(lessonTopicsKeys);
	console.log(lessonTopicsValues);

	return (
		<div className='course'>
			<img src={course.image} alt={course.name} className='courseImg' />
			{lessonTopicsKeys.map((lessonKey) => (
				<>
					<LessonTopicsCard
						key={lessonKey}
						lesson={lessonTopicsValues[lessonKey]}
					/>
				</>
			))}
		</div>
	);
};

export default Course;
