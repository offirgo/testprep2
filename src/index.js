import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { courses } from "./backend/firebase/courseData";
import App from "./App";

export const CoursesContext = createContext(courses);

ReactDOM.render(
	<React.StrictMode>
		<CoursesContext.Provider value={courses}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CoursesContext.Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
