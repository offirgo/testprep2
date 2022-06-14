import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

const signInWithFireBaseSocial = (provider) => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// The signed-in user info.
			const user = result.user;
			// ...
			console.log(user);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { signInWithFireBaseSocial };

const signInWithFireBaseMail = (email, password) => {
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

export { signInWithFireBaseMail };
