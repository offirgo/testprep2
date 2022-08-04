import React from "react";
import { Link } from "react-router-dom";
import "./lessonContent.css";

var Latex = require("react-latex");

const LessonContent = ({
	prevTopic,
	nextTopic,
	currentTopicName,
	currentTopicContent,
	courseName,
}) => {
	return (
		<div className='lessonContainer'>
			<h1 className='lessonTitle'> {currentTopicName}</h1>
			<Latex className='lessonCard'>{currentTopicContent}</Latex>
			<div className='navigationButtons'>
				{prevTopic ? (
					<button className='moveButton '>{prevTopic}</button>
				) : (
					<button className='moveButton'>{prevTopic}</button>
				)}
				<Link to={`/course/${courseName}`}>link to syllabus</Link>
				{nextTopic ? (
					<>
						<button className='moveButton '>{nextTopic}</button>
					</>
				) : (
					<div> </div>
				)}
			</div>
		</div>
	);
};

export default LessonContent;
