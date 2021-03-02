import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ cardName, cardValue }) => {
	return (
		<div className='container'>
			<div className='card-name'>{cardName}</div>
			<div className='card-value'>{cardValue}</div>
		</div>
	);
};

export default DetailsCard;
