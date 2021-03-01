import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className='challenge-section-container'>
			<h1 data-aos='fade-down' className='challenge-section-header'>
				Take a Speed Test Now!
			</h1>
			<TestContainer words={4} charcters={14} wpm={4} />
		</div>
	);
};

export default ChallengeSection;
