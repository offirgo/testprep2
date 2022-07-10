import React, { useState, useEffect } from "react";
import {
	signInWithPopup,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
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

export const signInWithFireBaseMail = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};

export function useAuthState() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}
