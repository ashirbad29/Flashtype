import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component {
	state = {
		selectedParagraph: 'Hello World',
		timerStarted: false,
		timeRemaining: 60,
		words: 0,
		characters: 0,
		wpm: 0,
	};

	render() {
		return (
			<div className='app'>
				{/* Nav */}
				<Nav />

				{/* Landing Page */}
				<Landing />

				{/* Challenge section */}
				<ChallengeSection
					selectedParagraph={this.state.selectedParagraph}
					timerStarted={this.state.timerStarted}
					timeRemaining={this.state.timeRemaining}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
				/>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
