import React from 'react';
import DetailsCard from '../DetailsCard/DetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({
	selectedParagraph,
	timerStarted,
	timeRemaining,
	words,
	characters,
	wpm,
}) => {
	return (
		<div className='typing-challenge-container'>
			{/* Details section */}
			<div className='details-container'>
				{/* words typed */}
				<DetailsCard cardName='words' cardValue={words} />

				{/* characters */}
				<DetailsCard cardName='characters' cardValue={characters} />

				{/* wpm */}
				<DetailsCard cardName='wpm' cardValue={wpm} />
			</div>
			{/* Challenge Section */}
			<div className='typewriter-container'>
				<TypingChallenge
					selectedParagraph={selectedParagraph}
					timerStarted={timerStarted}
					timeRemaining={timeRemaining}
				/>
			</div>
		</div>
	);
};

export default TypingChallengeContainer;
