import { firebaseDb } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

let coursesQuerySnapshot;
let courses = [];
getDocs(collection(firebaseDb, "courses")).then((res) => {
	coursesQuerySnapshot = res;
	coursesQuerySnapshot.docs.forEach((doc) => {
		courses.push({ ...doc.data(), id: doc.id });
	});
});

let imagesQuerySnapshot;
let images = [];
getDocs(collection(firebaseDb, "images")).then((res) => {
	imagesQuerySnapshot = res;
	imagesQuerySnapshot.docs.forEach((doc) => {
		images.push({ ...doc.data(), id: doc.id });
	});
});

const getCourseLessons = async (courseName, setLessons) => {
	let lessonsSnapshot;
	let lessons = [];

	await getDocs(collection(firebaseDb, courseName + "Lessons")).then((res) => {
		lessonsSnapshot = res;
		lessonsSnapshot.docs.forEach((doc) => {
			lessons.push({ ...doc.data(), id: doc.id });
		});
		lessons = lessons[0];
		setLessons(lessons);
	});
};

let lessonContentSnapshot;
let lessonContent = [];
let topicToGet = "lessonTopicRatios";

getDocs(collection(firebaseDb, topicToGet)).then((res) => {
	lessonContentSnapshot = res;
	lessonContentSnapshot.docs.forEach((doc) => {
		lessonContent.push({ ...doc.data(), id: doc.id });
	});
});

export { courses };
export { images };
export { getCourseLessons };
export { lessonContent };
