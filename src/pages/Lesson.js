import React from "react";
import { useLocation } from "react-router-dom";
import LessonContent from "../components/LessonContent";
import { gmatLessons } from "../backend/firebase/courseData";

const Lesson = () => {
	const lessons = gmatLessons[0];
	const location = useLocation();

	const currentTopicName = location.pathname.split("/")[3];
	const currentTopicNameWS = currentTopicName.replace(/_/g, " ");

	const topicsNamesArray = lessons.topicsNames;
	const topicsContentMap = lessons.lessons_content;

	let currentTopicKey = topicsNamesArray.findIndex(
		(element) => element === currentTopicNameWS
	);
	let nextTopicKey = currentTopicKey + 1;
	let prevTopicKey = currentTopicKey - 1;
	let nextTopic = topicsNamesArray[nextTopicKey];
	let prevTopic = topicsNamesArray[prevTopicKey];

	let currentTopicContent = topicsContentMap[currentTopicNameWS];

	return (
		<>
			<LessonContent
				prevTopic={prevTopic}
				nextTopic={nextTopic}
				currentTopicName={currentTopicNameWS}
				currentTopicContent={currentTopicContent}></LessonContent>
		</>
	);
};
export default Lesson;
