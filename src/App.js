// IMPORTING EXTERNAL DIPENDECIES
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// IMPORTING COMPONENTS
import Gmat from "./Gmat";
import Gre from "./Gre";
import Sat from "./Sat";
import Home from "./Home";
import Login from "./Login";
// IMPORT STYLES
import "./app.css";
import "./home.css";
import "./gmat.css";
import "./gre.css";
import "./login.css";

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path='/' exact element={<Home />}></Route>
					<Route path='/Gmat' exact element={<Gmat />}></Route>
					<Route path='/gre' exact element={<Gre />}></Route>
					<Route path='/sat' exact element={<Sat />}></Route>
					<Route path='/Login' exact element={<Login />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
