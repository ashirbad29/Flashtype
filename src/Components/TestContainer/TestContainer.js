import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import './TestContainer.css';

const TestContainer = ({ words, charcters, wpm }) => {
	return (
		<div className='test-container'>
			<div className='try-again-container'>
				<TryAgain words={words} charcters={charcters} wpm={wpm} />
			</div>
		</div>
	);
};

export default TestContainer;
