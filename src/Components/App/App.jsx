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

const defaultPara = `What we don't know for sure is whether or not the literature would have us believe that a lignite song is not but a fahrenheit. Few can name a cauline offer that isn't an unrouged peen. If this was somewhat unclear, an elbow sees a wine as a younger mitten. The purer columnist reveals itself as a knavish run to those who look. Before skirts, men were only craftsmen. The icon is a drawer. One cannot separate refrigerators from unmissed christmases. A voetstoots vacation's addition comes with it the thought that the uncleared alphabet is a climb. Before sociologies, products were only ears.`;

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
			})
			.catch(() => {
				this.setState({ selectedParagraph: defaultPara });
				const paragraphArray = defaultPara.split('');
				const testInfo = paragraphArray.map(letter => ({
					testLetter: letter,
					status: 'notAttempted',
				}));
				this.setState({
					...defaultState,
					testInfo,
					selectedParagraph: defaultPara,
				});
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
