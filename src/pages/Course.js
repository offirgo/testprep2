import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./course.css";

import { courses } from "../backend/firebase/courseData";

const Course = () => {
	let [course, setCourse] = useState([]);
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const temp = courses.find((c) => c.name.toString() === path);
	/*console.log(path);
	console.log(temp);
	console.log(courses);
	console.log(course);
	*/
	return (
		<div className='course'>
			<img src={course.img} alt='your course' className='courseImg' />
			<h1 className='courseTitle'>{course.title}</h1>
			<p className='courseDesc'>{course.desc}</p>
			<p className='courseLongDesc'>{course.longDesc}</p>
		</div>
	);
};

export default Course;
