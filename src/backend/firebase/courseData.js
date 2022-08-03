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

let gmatLessonsSnapshot;
let gmatLessons = [];
getDocs(collection(firebaseDb, "gmatLessons")).then((res) => {
	gmatLessonsSnapshot = res;
	gmatLessonsSnapshot.docs.forEach((doc) => {
		gmatLessons.push({ ...doc.data(), id: doc.id });
	});
});

export { courses };
export { images };
export { gmatLessons };
