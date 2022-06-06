import React from "react";
import { useLocation } from "react-router-dom";

import { courses } from "../data";
import "./course.css";

const Course = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const course = courses.find((c) => c.id.toString() === path);

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
