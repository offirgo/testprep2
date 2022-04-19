import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
	return (
		<>
			<div className='navBarContainer'>
				<div className='elementContainer'> selected course </div>
				<div className='elementContainer'> user name </div>
				<div className='elementContainer'>{<Link to='/Login'>Login</Link>}</div>
			</div>
			<div className='mainAreaGrid'>
				<Link to='gmat'>gmat</Link>
				<Link to='gre'>gre</Link>
				<Link to='sat'>sat</Link>
			</div>
			<div className='footerContainer'>
				<div className='elementContainer'> about us </div>
				<div className='elementContainer'> contact us </div>
			</div>
		</>
	);
}

export default Home;
