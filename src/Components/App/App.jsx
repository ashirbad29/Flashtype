import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const url = 'http://metaphorpsum.com/paragraphs/1/9';

class App extends React.Component {
	state = {
		selectedParagraph: 'Hello World',
		testInfo: [],
		timerStarted: false,
		timeRemaining: 60,
		words: 0,
		characters: 0,
		wpm: 0,
	};

	componentDidMount() {
		// fetch(url)
		// 	.then(response => response.text())
		// 	.then(data => this.setState({ selectedParagraph: data }));
		const paragraphArray = this.state.selectedParagraph.split('');
		const testInfo = paragraphArray.map(letter => ({
			testLetter: letter,
			status: 'notAttempted',
		}));
		this.setState({ testInfo });
	}

	handleUserInput = input => {
		console.log(input);
	};

	render() {
		console.log(this.state.testInfo);
		return (
			<div className='app'>
				{/* Nav */}
				<Nav />

				{/* Landing Page */}
				<Landing />

				{/* Challenge section */}
				<ChallengeSection
					selectedParagraph={this.state.selectedParagraph}
					testInfo={this.state.testInfo}
					timerStarted={this.state.timerStarted}
					timeRemaining={this.state.timeRemaining}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
					handleUserInput={this.handleUserInput}
				/>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
