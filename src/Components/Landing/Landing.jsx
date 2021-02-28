import React, { useEffect } from 'react';
import './Landing.css';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../../assets/hero.png';

const Landing = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className='landing-container'>
			<div data-aos='fade-right' className='landing-left'>
				<h1 className='landing-header'>Can You Type</h1>
				<div className='typewriter-container'>
					<Typewriter
						options={{
							strings: ['Fast', 'Quick', 'Correct'],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div data-aos='fade-left' className='landing-right'>
				<img src={hero} alt='hero' className='flash-image' />
			</div>
		</div>
	);
};

export default Landing;
