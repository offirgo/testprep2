import React, { useState, useEffect } from "react";
import {
	signInWithPopup,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../src/config/firebase";

export const signInWithFireBaseSocial = (provider) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// The signed-in user info.
			const user = result.user;
			// ...
		})
		.catch((error) => {
			console.log(error);
		});
};

export function signUpWithFireBaseMail(email, password, setPasswordMessage) {
	let currentUser;
	console.log(auth);
	console.log(email);
	console.log(password);
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			currentUser = userCredential.user;
			console.log("in");
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode === "auth/email-already-in-use") {
				setPasswordMessage(
					"Email already in use, please sign in or use a different mail"
				);
			}
			// ..
		});
	return currentUser;
}

export function signinWithFireBaseMail(email, password, setPasswordMessage) {
	let currentUser;
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			if (errorCode === "auth/invalid-email")
				setPasswordMessage(
					"Mail does exist, please check mail spelling or signup with a different mail"
				);
			if (errorCode === "auth/wrong-password")
				setPasswordMessage(
					"Password does not match mail, please try again or reset password"
				);
		});
	return currentUser;
}

export function useAuthState() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}
