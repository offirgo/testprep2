import React from "react";
import { Link } from "react-router-dom";

import "./lessonTopicsCard.css";

const LessonTopicsCard = ({ lessonTopics, lessonNumber }) => {
	let LessonNumberText = "Lesson " + lessonNumber;
	if (lessonNumber === 0) {
		LessonNumberText = "Pre-course";
	}
	console.log(typeof lessonNumber);
	console.log(LessonNumberText);
	let topicsPageName = lessonTopics.map((topic) => topic.replace(/ /g, "_"));
	console.log(topicsPageName);
	return (
		<div className='LessonSyllabusCard'>
			<div className='lessonNumber'>{LessonNumberText}</div>
			<div className='topicsContainer'>
				{lessonTopics.map((topic, index) => (
					<>
						<div className='lessonTopic' key={index}>
							<Link to={`/Lesson/${topicsPageName[index]}`}>
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
