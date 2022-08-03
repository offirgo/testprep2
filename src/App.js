// IMPORTING EXTERNAL DIPENDECIES
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// IMPORTING COMPONENTS and pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
// IMPORT STYLES
import "./app.css";
import "./pages/home.css";
import "./pages/signin.css";
import "./components/navbar.css";
//FIREBASE IMPORTS
import { useAuthState } from "./auth";

function App() {
	let currentUser = useAuthState();
	return currentUser ? (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/Signup' element={<Navigate to='/' />} />
				<Route path='/Signin' element={<Navigate to='/' />} />
				<Route path='/course/:id' element={<Course />} />
				<Route path='/lesson/:id/:id' element={<Lesson />} />
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
				<Route path='/lesson/:id' element={<Signin />} />
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
