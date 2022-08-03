import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./lessonTopicsCard.css";

const LessonTopicsCard = ({ lessonTopics, lessonNumber, courseName }) => {
	let LessonNumberText = "Lesson " + lessonNumber;
	if (lessonNumber === 0) {
		LessonNumberText = "Pre-course";
	}
	let topicsPageName = lessonTopics.map((topic) => topic.replace(/ /g, "_"));
	return (
		<div className='LessonSyllabusCard'>
			<div className='lessonNumber'>{LessonNumberText}</div>
			<div className='topicsContainer'>
				{lessonTopics.map((topic, index) => (
					<>
						<div className='lessonTopic' key={index}>
							<Link to={`/lesson/${courseName}/${topicsPageName[index]}`}>
								{index + 1}.{topic}
							</Link>
						</div>
					</>
				))}
			</div>
		</div>
	);
};
export default LessonTopicsCard;
