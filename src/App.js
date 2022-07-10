// IMPORTING EXTERNAL DIPENDECIES
import React, { useState, useEffect } from "react";
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
import { useAuthState } from "./auth";

function App() {
	let currentUser = useAuthState();
	console.log(currentUser);
	return currentUser ? (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/Signup' element={<Home />} />
				<Route path='/Signin' element={<Home />} />
				<Route path='/course/:id' element={<Course />} />
			</Routes>
		</>
	) : (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Signin' element={<Signin />} />
				<Route path='/Signup' element={<Signup />} />
				<Route path='/course/:id' element={<Signin />} />
			</Routes>
		</>
	);
}

export default App;

/*
	if (currentUser) {
		return (
			<>
				<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Signup' element={<Home />} />
						<Route path='/Signin' element={<Home />} />
						<Route path='/course/:id' element={<Course />} />
					</Routes>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Signup' element={<Signup />} />
						<Route path='/Signin' element={<Signin />} />
						<Route path='/course/:id' element={<Navigate to='/Signin' />} />
					</Routes>
				</div>
			</>
		);
	}
}


/*{currentUser ? (
						<>
							<Route
								path='/course/:id'
								element={thisUser ? <Course /> : <Navigate to='/Signin' />}
							/>
							<Route path='/Signin' element={<Navigate to='/Signin' />} />
							<Route path='/Signup' element={<Navigate to='/Signin' />} />
						</>
					) : (
						<>
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
						</>
					)}*/
