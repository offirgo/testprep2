import React from "react";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useAuthState } from "../auth";

const auth = getAuth();

function Navbar() {
	let currentUser = useAuthState();
	const isEntrancePage = false;
	let photo = "https://picsum.photos/200/300";
	if (currentUser) {
		console.log(currentUser.photoURL);
		fetch(currentUser.photoURL).then((res) => console.log(res));
		photo = currentUser.photoURL;
	}

	const logout = () => {
		signOut(auth)
			.then(() => {
				console.log("user logged out");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	console.log(currentUser);
	return (
		<div className='navbar'>
			<span className='logo'>
				<Link className='link' to=''>
					NBTP
				</Link>
			</span>
			{currentUser ? (
				<ul className='navList'>
					<li className='listItem'>
						<img src={photo} alt='logo' className='avatar' />
					</li>
					<li className='listItem'>{currentUser.displayName}</li>
					<li className='listItem' onClick={logout}>
						Logout
					</li>
				</ul>
			) : isEntrancePage ? (
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
