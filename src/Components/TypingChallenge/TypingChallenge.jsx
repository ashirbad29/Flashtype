import React from 'react';
import './TypingChallenge.css';
const TypingChallenge = ({ selectedParagraph }) => {
	return (
		<div className='typing-challenge'>
			<div className='timer-container'>
				<p className='timer'>00:60</p>
				<p className='timer-info'>start typing to start the test</p>
			</div>

			<div className='textarea-container'>
				<div className='textarea-left'>
					<div className='textarea test-paragraph'>{selectedParagraph}</div>
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
