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
					<Link>
						<button className='moveButton'>{prevTopic}</button>
					</Link>
				) : (
					<button className='moveButton'>{prevTopic}</button>
				)}
				<Link className='syllabusLink' to={`/course/${courseName}`}>
					link to syllabus
				</Link>
				{nextTopic ? (
					<>
						<button className='moveButton'>
							<Link className='moveLink' to={`/course/${nextTopic}`}>
								{nextTopic}
							</Link>
						</button>
					</>
				) : (
					<div> </div>
				)}
			</div>
		</div>
	);
};

export default LessonContent;
