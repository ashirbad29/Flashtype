import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, charcters, wpm, startAgain }) => {
	return (
		<div className='try-again-container'>
			<h1>Your Results!</h1>
			<div className='results-container'>
				<p>
					<b> characters: </b>
					{charcters}
				</p>
				<p>
					<b> words: </b>
					{words}
				</p>
				<p>
					<b> wpm: </b>
					{wpm}
				</p>
			</div>

			<div className='btn-container'>
				<button onClick={() => startAgain()} className='btn retry-btn'>
					Retry
				</button>
				<button
					onClick={() => {
						window.open(
							'https://twitter.com/intent/tweet?text=look at this',
							'twitter',
							'width=800, height=600'
						);
					}}
					className='btn tweet-btn'
				>
					Tweet
				</button>
			</div>
		</div>
	);
};

export default TryAgain;
