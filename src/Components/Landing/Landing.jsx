import React from 'react';
import './Landing.css';
import hero from '../../assets/hero.png';

const Landing = () => {
	return (
		<div className='landing-container'>
			<div className='landing-left'>
				<h1 className='landing-header'>Can You Type</h1>
				<div className='typewriter-container'>
					<div>Fast?</div>
					<div>Correct?</div>
					<div>Quick?</div>
				</div>
			</div>
			<div className='landing-right'>
				<img src={hero} alt='hero' className='flash-image' />
			</div>
		</div>
	);
};

export default Landing;
