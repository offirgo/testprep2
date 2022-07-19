import React from "react";
import { useState } from "react";
import { googleProvider } from "../config/authMethods";
import { fabebookProvider } from "../config/authMethods";
import { twitterProvider } from "../config/authMethods";

import { signInWithFireBaseSocial, signUpWithFireBaseMail } from "../auth";

import googleIcon from "../images/google.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";

const strongPassword = (email, password) => {
	const capsLetterCheck = /[A-Z]/.test(password);
	const numberCheck = /[0-9]/.test(password);
	const lengthCheck = password.length >= 8;
	const specialCharCheck = /[!@#$%^&*]/.test(password);
	return capsLetterCheck && numberCheck && lengthCheck && specialCharCheck;
};

function Signup(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordMessage, setPasswordMessage] = useState("");

	const handleLoginClick = async (provider) => {
		const res = await signInWithFireBaseSocial(provider);
	};

	const handleEmailChange = (e) => {
		setPasswordMessage("");
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPasswordMessage("");
		setPassword(e.target.value);
	};

	const handleEmailSignupWithFirebase = (e) => {
		e.preventDefault();
		if (strongPassword(email, password)) {
			signUpWithFireBaseMail(email, password, setPasswordMessage);
			setPasswordMessage("");
		} else
			setPasswordMessage(
				"Password must be at least 8 characters long and contain one lowercase letter, one uppercase letter and one special character."
			);
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
						<div id='error'></div>
						<form id='signupForm'>
							<div>
								<input
									name='name'
									type='email'
									placeholder='email'
									value={email}
									onChange={handleEmailChange}
									required
								/>
							</div>
							<div>
								<input
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									value={password}
									onChange={handlePasswordChange}
									required
								/>
							</div>
							<div>
								<button
									className='submit'
									type='submit'
									onClick={handleEmailSignupWithFirebase}>
									Signup
								</button>
							</div>
							<div className='errorMessage'>{passwordMessage}</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;
