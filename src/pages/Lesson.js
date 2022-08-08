import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LessonContent from "../components/LessonContent";
import { getCourseLessons } from "../backend/firebase/courseData";

const Lesson = () => {
	let [lessons, setLessons] = useState([]);
	let prevTopic;
	let nextTopic;
	let currentTopicNameWS;
	let currentTopicContent;

	const location = useLocation();
	const courseName = location.pathname.split("/")[2];
	if (lessons && lessons.length === 0) {
		getCourseLessons(courseName, setLessons);
	} else {
		const currentTopicName = location.pathname.split("/")[3];
		currentTopicNameWS = currentTopicName.replace(/_/g, " ");

		const topicsNamesArray = lessons.topicsNames;
		const topicsContentMap = lessons.lessons_content;

		let currentTopicKey = topicsNamesArray.findIndex(
			(element) => element === currentTopicNameWS
		);
		let nextTopicKey = currentTopicKey + 1;
		let prevTopicKey = currentTopicKey - 1;
		nextTopic = topicsNamesArray[nextTopicKey];
		prevTopic = topicsNamesArray[prevTopicKey];

		currentTopicContent = topicsContentMap[currentTopicNameWS];
	}

	return (
		<>
			<LessonContent
				prevTopic={prevTopic}
				nextTopic={nextTopic}
				currentTopicName={currentTopicNameWS}
				currentTopicContent={currentTopicContent}
				courseName={courseName}></LessonContent>
		</>
	);
};
export default Lesson;
