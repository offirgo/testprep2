import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

const Card = ({ course }) => {
	return (
		<div className='card'>
			<Link className='Link' to={`/course/${course.name}`}>
				<img src={course.image} alt='' className='courseImg' />
				<span className='title'> {course.title}</span>
				<p className='desc'>{course.desc}</p>
				<button className='cardButton'>Read more</button>
			</Link>
		</div>
	);
};

export default Card;
