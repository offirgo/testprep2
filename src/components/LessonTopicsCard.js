import React from "react";

import "./card.css";

const LessonTopicsCard = ({ lesson }) => {
	return (
		<div className='card'>
			<div>{lesson}</div>
		</div>
	);
};

export default LessonTopicsCard;
