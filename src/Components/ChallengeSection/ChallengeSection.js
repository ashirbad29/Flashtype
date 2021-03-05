import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = ({
	selectedParagraph,
	testInfo,
	timerStarted,
	timeRemaining,
	words,
	characters,
	wpm,
	handleUserInput,
}) => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className='challenge-section-container'>
			<h1 data-aos='fade-down' className='challenge-section-header'>
				Take a Speed Test Now!
			</h1>
			<TestContainer
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
	);
};

export default ChallengeSection;
