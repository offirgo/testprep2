import React from "react";

import { googleProvider } from "../config/authMethods";
import { fabebookProvider } from "../config/authMethods";
import { twitterProvider } from "../config/authMethods";

import signInWithFireBase from "../auth";

import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";

function Signin(props) {
	const handleLoginClick = async (provider) => {
		signInWithFireBase(provider);
	};

	return (
		<>
			<div className='loginPage'>
				<h1 className='loginTitle'> Choose your login method </h1>
				<div className='wrapper'>
					<div className='left'>
						<div
							className='loginButton googleButton'
							onClick={() => handleLoginClick(googleProvider)}>
							<img src={googleIcon} alt='google icon' className='icon' />
							google
						</div>
						<div
							className='loginButton facebookButton'
							onClick={() => handleLoginClick(fabebookProvider)}>
							<img src={facebookIcon} alt='facebook icon' className='icon' />
							facebook
						</div>
						<div
							className='loginButton twitterButton'
							onClick={() => handleLoginClick(twitterProvider)}>
							<img src={twitterIcon} alt='twitter icon' className='icon' />
							twitter
						</div>
					</div>
					<div className='center'>
						<div className='line' />
						<div className='or'> OR </div>
					</div>
					<div className='right'>
						<input type='text' placeholder='Username' />
						<input type='text' placeholder='Password' />
						<button className='submit'>Signin</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signin;
