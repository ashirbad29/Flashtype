import React from 'react';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				{/* Nav */}
				<Nav />
				{/* Landing Page */}
				<Landing />
				{/* Challenge section */}

				{/* Footer */}
			</div>
		);
	}
}

export default App;
