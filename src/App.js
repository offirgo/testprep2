// IMPORTING EXTERNAL DIPENDECIES
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// IMPORTING COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Course from "./pages/Course";
// IMPORT STYLES
import "./app.css";
import "./pages/home.css";
import "./pages/signin.css";
import "./components/navbar.css";
//FIREBASE IMPORTS
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
function App({}) {
	return (
		<>
			<div>
				<Navbar thisUser={thisUser} />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route
						path='/Signin'
						element={thisUser ? <Navigate to='/' /> : <Signin />}
					/>
					<Route
						path='/Signup'
						element={thisUser ? <Navigate to='/' /> : <Signup />}
					/>
					<Route
						path='/course/:id'
						element={thisUser ? <Course /> : <Navigate to='/Signin' />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
