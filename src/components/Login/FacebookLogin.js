import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookAppLogin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState("");
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userFbPicture, setUserFbPicture] = useState("");

	let fbContent;

	const componentClicked = () => {
		console.log("");
	};
	const responseFacebook = (response) => {
		setIsLoggedIn(true);
		setUserId(response.id);
		setUserName(response.name);
		setUserEmail(response.email);
		setUserFbPicture(response.picture.data.url);
	};

	if (isLoggedIn) {
		fbContent = (
			<div className='loginContainer'>
				<img src={userFbPicture} alt={userName} />
				<h2> Welcom {userName}</h2>
				Email: {userEmail}
			</div>
		);
	} else {
		fbContent = (
			<FacebookLogin
				appId='684568499491824'
				autoLoad={true}
				fields='name,email,picture'
				onClick={componentClicked}
				callback={responseFacebook}
			/>
		);
	}
	return <div>{fbContent}</div>;
};

export default FacebookAppLogin;
