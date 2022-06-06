import React from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let thisUser;

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		thisUser = user;
	}
});
function Navbar() {
	const isLoginPage = false;

	let photo = "https://picsum.photos/200/300";
	if (thisUser) {
		photo = thisUser.photoURL;
	}

	const logout = async () => {
		await window.open("https://localhost:5000/auth/logout", "_self");
	};
	return (
		<div className='navbar'>
			<span className='logo'>
				<Link className='link' to=''>
					NBTP
				</Link>
			</span>
			{thisUser ? (
				<ul className='navList'>
					<li className='listItem'>
						<img src={photo} alt='logo' className='avatar' />
					</li>
					<li className='listItem'>{thisUser.displayName}</li>
					<li className='listItem' onClick={logout}>
						Logout
					</li>
				</ul>
			) : isLoginPage ? (
				<span></span>
			) : (
				<ul className='navList'>
					<li className='listItem'>
						<Link className='link' to='Signup'>
							Signup
						</Link>
					</li>
					<li>
						<Link className='link' to='Signin'>
							Signin
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
}

export default Navbar;
