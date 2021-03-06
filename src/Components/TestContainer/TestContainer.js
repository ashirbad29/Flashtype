import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({
	selectedParagraph,
	testInfo,
	timerStarted,
	timeRemaining,
	words,
	characters,
	wpm,
	handleUserInput,
	startAgain,
}) => {
	return (
		<div className='test-container'>
			{timeRemaining > 0 ? (
				<div className='typing-challenge-container'>
					<TypingChallengeContainer
						selectedParagraph={selectedParagraph}
						testInfo={testInfo}
						timerStarted={timerStarted}
						timeRemaining={timeRemaining}
						words={words}
						characters={characters}
						wpm={wpm}
						handleUserInput={handleUserInput}
					/>
				</div>
			) : (
				<div className='try-again-container'>
					<TryAgain
						words={words}
						charcters={characters}
						wpm={wpm}
						startAgain={startAgain}
					/>
				</div>
			)}
		</div>
	);
};

export default TestContainer;
