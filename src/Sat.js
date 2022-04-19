import React from "react";
import { Link } from "react-router-dom";

function Sat(props) {
	return (
		<>
			<div className='navBarContainer'>
				<div className='elementContainer'> selected course </div>
				<div className='elementContainer'> user name </div>
				<div className='elementContainer'> {<Link to='/'>Login</Link>} </div>
			</div>
			<Link to='/'>Home</Link>;
			<div className='footerContainer'>
				<div className='elementContainer'> about us </div>
				<div className='elementContainer'> contact us </div>
			</div>
		</>
	);
}

export default Sat;
