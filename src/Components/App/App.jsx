import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const url = 'http://metaphorpsum.com/paragraphs/1/9';

const defaultState = {
	selectedParagraph: '',
	testInfo: [],
	timerStarted: false,
	timeRemaining: 60,
	words: 0,
	characters: 0,
	wpm: 0,
};

class App extends React.Component {
	state = defaultState;

	fetchNewParagraph = () => {
		fetch(url)
			.then(response => response.text())
			.then(data => {
				this.setState({ selectedParagraph: data });
				const paragraphArray = data.split('');
				const testInfo = paragraphArray.map(letter => ({
					testLetter: letter,
					status: 'notAttempted',
				}));
				this.setState({ ...defaultState, testInfo, selectedParagraph: data });
			});
	};

	componentDidMount() {
		this.fetchNewParagraph();
	}

	startTimer = () => {
		this.setState({ timerStarted: true });

		const timer = setInterval(() => {
			if (this.state.timeRemaining > 0) {
				const timeSpent = 60 - this.state.timeRemaining;
				const dWpm = timeSpent > 0 ? (this.state.words / timeSpent) * 60 : 0;

				this.setState({
					timeRemaining: this.state.timeRemaining - 1,
					wpm: parseInt(dWpm),
				});
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	handleUserInput = input => {
		this.state.timerStarted || this.startTimer();
		const characters = input.length;
		const words = input.split(' ').length;
		const index = characters - 1;

		if (index < 0) {
			this.setState({
				testInfo: [
					{
						testLetter: this.state.testInfo[0].testLetter,
						status: 'notAttempted',
					},
					...this.state.testInfo.slice(1),
				],
				characters,
				words,
			});
			return;
		}

		if (index > this.state.selectedParagraph.length) {
			this.setState({ characters, words });
			return;
		}

		const testInfo = this.state.testInfo;
		if (!(index === this.state.selectedParagraph.length - 1))
			testInfo[index + 1].status = 'notAttempted';

		// check for corrct typed letters
		const isCorrect = input[index] === testInfo[index].testLetter;

		testInfo[index].status = isCorrect ? 'correct' : 'incorrect';
		this.setState({
			testInfo,
			words,
			characters,
		});
	};

	startAgain = () => {
		this.fetchNewParagraph();
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
					testInfo={this.state.testInfo}
					timerStarted={this.state.timerStarted}
					timeRemaining={this.state.timeRemaining}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
					handleUserInput={this.handleUserInput}
					startAgain={this.startAgain}
				/>

				{/* Footer */}
				<Footer />
			</div>
		);
	}
}

export default App;
