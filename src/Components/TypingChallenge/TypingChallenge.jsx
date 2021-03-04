import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';
const TypingChallenge = ({
	selectedParagraph,
	testInfo,
	timeRemaining,
	timerStarted,
}) => {
	console.log('inside typing challenge container', testInfo);
	return (
		<div className='typing-challenge'>
			<div className='timer-container'>
				<p className='timer'>
					00:{timeRemaining > 9 ? timeRemaining : `0${timeRemaining}`}
				</p>
				<p className='timer-info'>
					{!timerStarted && 'start typing to start the test'}
				</p>
			</div>

			<div className='textarea-container'>
				<div className='textarea-left'>
					<div className='textarea test-paragraph'>
						{testInfo.map(individualLetterInfo => (
							<TestLetter individualLetterInfo={individualLetterInfo} />
						))}
					</div>
				</div>

				<div className='textarea-right'>
					<textarea
						className='textarea'
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='start typing here!'
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default TypingChallenge;
