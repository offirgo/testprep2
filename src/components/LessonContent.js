import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./lessonContent.css";
import { getLessonContent } from "../backend/firebase/courseData";
import Paragraphs from "../components/Paragraphs";
//var Latex = require("react-latex");

const LessonContent = ({
	prevTopic,
	nextTopic,
	currentTopicName,
	currentTopicContent,
	courseName,
}) => {
	let [content, setContent] = useState([]);
	if (!content || content.length === 0) {
		getLessonContent(currentTopicContent, setContent);
	}

	return (
		<div className='lessonContainer'>
			<h1 className='lessonTitle'> {currentTopicName}</h1>
			<div className='paragraphs'>
				{content.map((paragraph, index) => {
					return (
						<>
							<Paragraphs key={index} paragraph={paragraph}></Paragraphs>
						</>
					);
				})}
			</div>
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
					<button className='moveButton'>{prevTopic}</button>
				)}
			</div>
		</div>
	);
};

export default LessonContent;
