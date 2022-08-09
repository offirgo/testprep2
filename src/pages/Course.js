import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LessonTopicsCard from "../components/LessonTopicsCard";
import "./course.css";

import { getCoursesFromFirebase } from "../backend/firebase/courseData";

const Course = () => {
	let [courses, setCourses] = useState([]);

	let course;
	let topicsByLessonArray = [];
	let image;
	let name;

	const location = useLocation();
	const path = location.pathname.split("/")[2];
	if (!courses || courses.length === 0) {
		getCoursesFromFirebase(setCourses);
	} else {
		course = courses.find((c) => c.name.toString() === path);
		topicsByLessonArray = course.topicsByLessonArray;
		image = course.image;
		name = course.name;
	}
	return (
		<div className='course'>
			<img src={image} alt={name} className='courseImg' />
			<div className='syllabusCardsContainer'>
				{topicsByLessonArray.map((lessonTopicsMap, index) => (
					<>
						<LessonTopicsCard
							key={index}
							lessonTopics={Object.values(lessonTopicsMap)}
							lessonNumber={index}
							courseName={course.name}
						/>
					</>
				))}
			</div>
		</div>
	);
};

export default Course;
