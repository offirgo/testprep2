import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();

const signInWithFireBase = (provider) => {
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

export default signInWithFireBase;
