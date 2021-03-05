import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';
const TypingChallenge = ({
	testInfo,
	timeRemaining,
	timerStarted,
	handleUserInput,
}) => {
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
						{testInfo.map((individualLetterInfo, index) => (
							<TestLetter
								key={index}
								individualLetterInfo={individualLetterInfo}
							/>
						))}
					</div>
				</div>

				<div className='textarea-right'>
					<textarea
						onChange={e => handleUserInput(e.target.value)}
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
