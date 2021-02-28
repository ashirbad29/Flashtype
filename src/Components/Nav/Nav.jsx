import React from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';

const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='nav-left'>
				<img src={logo} alt='nav-logo' className='flash-logo' />
				<p className='flash-logo-text'>FlashType</p>
			</div>
			<div className='nav-right'>
				<a
					className='nav-link'
					href='https://github.com/ashirbad29'
					target='_blank'
					rel='noreferrer'
				>
					Github
				</a>
			</div>
		</div>
	);
};

export default Nav;
