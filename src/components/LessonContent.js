import React from "react";
import { Link } from "react-router-dom";

import "./lessonContent.css";

const LessonContent = ({
	prevTopic,
	nextTopic,
	currentTopicName,
	currentTopicContent,
}) => {
	return (
		<div className='lessonContainer'>
			<h1 className='title'> {currentTopicName}</h1>
			<p className='lessonCard'>{currentTopicContent}</p>
			{prevTopic ? (
				<button className='moveButton'>{prevTopic}</button>
			) : (
				<div></div>
			)}
			<div>link to syllabus</div>
			{nextTopic ? (
				<button className='moveButton'>{nextTopic}</button>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default LessonContent;
