import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({ words, charcters, wpm }) => {
	const timeRemaining = 10;

	return (
		<div className='test-container'>
			{timeRemaining > 0 ? (
				<div className='typing-challenge-container'>
					<TypingChallengeContainer
						words={words}
						characters={charcters}
						wpm={wpm}
					/>
				</div>
			) : (
				<div className='try-again-container'>
					<TryAgain words={words} charcters={charcters} wpm={wpm} />
				</div>
			)}
		</div>
	);
};

export default TestContainer;
