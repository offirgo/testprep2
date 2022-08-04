import React from "react";
import { Link } from "react-router-dom";
import "./lessonContent.css";

var Latex = require("react-latex");

const LessonContent = ({
	prevTopic,
	nextTopic,
	currentTopicName,
	currentTopicContent,
}) => {
	const fraction = `$$ \\frac{1}{2} $$`;
	return (
		<div className='lessonContainer'>
			<Latex>{fraction}</Latex>
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
