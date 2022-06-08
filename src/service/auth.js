import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth();

const signInWithFireBase = (provider) => {
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

export default signInWithFireBase;
