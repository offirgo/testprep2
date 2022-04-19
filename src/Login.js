import React from "react";
import { Link } from "react-router-dom";

import FacebookLogin from "./components/Login/FacebookLogin";
import GoogleLogin from "./components/Login/GoogleLogin";

function Login(props) {
	return (
		<>
			<div className='navBarContainer'>
				<div className='elementContainer'> selected course </div>
				<div className='elementContainer'> user name </div>
				<div className='elementContainer'> Logout </div>
				<div className='elementContainer'>{<Link to='/'>Home</Link>}</div>
			</div>
			<div className='mainAreaGrid'>
				<FacebookLogin />
				<GoogleLogin />
				<div>user</div>
			</div>
			<div className='footerContainer'>
				<div className='elementContainer'> about us </div>
				<div className='elementContainer'> contact us </div>
			</div>
		</>
	);
}

export default Login;
