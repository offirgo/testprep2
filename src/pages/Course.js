import React from "react";
import { useLocation } from "react-router-dom";
import LessonTopicsCard from "../components/LessonTopicsCard";
import "./course.css";

import { courses } from "../backend/firebase/courseData";

const Course = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	let course = courses.find((c) => c.name.toString() === path);
	let topicsByLessonArray = course.topicsByLessonArray;

	return (
		<div className='course'>
			<img src={course.image} alt={course.name} className='courseImg' />
			<div className='syllabusCardsContainer'>
				{topicsByLessonArray.map((lessonTopicsMap, index) => (
					<>
						<LessonTopicsCard
							key={index}
							lessonTopics={Object.values(lessonTopicsMap)}
							lessonNumber={index}
						/>
					</>
				))}
			</div>
		</div>
	);
};

export default Course;
