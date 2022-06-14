// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD93UDOOoVHtPTbL8Raxv3kkS8Gm7byX3w",
	authDomain: "testprep2.firebaseapp.com",
	projectId: "testprep2",
	storageBucket: "testprep2.appspot.com",
	messagingSenderId: "182212111020",
	appId: "1:182212111020:web:603f235b3d3f8b595e0d09",
	measurementId: "G-0PCEC85E97",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// Initialize the FirebaseUI Widget using Firebase.
export default firebaseAuth;
