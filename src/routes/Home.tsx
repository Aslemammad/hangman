import React from 'react';
import { createUseStyles } from 'react-jss';
import { navigate } from 'hookrouter';
import { useStore } from '../store';
import Button from '../components/Button';
import EmojiContainer from '../components/EmojiContainer';
import Settings from '../components/Settings';
import { Store } from '../interfaces';
const useStyles = createUseStyles({
	home: {
		display: 'flex',
		width: '100%',
		height: '100%',
		padding: '5rem',
		'flex-direction': 'column',
		'align-items': 'center'
	},
	title: {
		'font-family': 'Ubuntu, sans-serif',
		'font-size': '64px'
	},
	buttons: {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	},
	settings: {}
});
const Home = () => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	return (
		<div className={classes.home}>
			<h1 className={classes.title}>Hangman</h1>
			<EmojiContainer />
			<div className={classes.buttons}>
				<Button primary onClick={() => navigate('/game')} />
				<Button
					onClick={() => {
						setState((prevState: Store) => ({ ...prevState, playerTwo: { points: 0 } }));
						navigate('/game');
					}}
				/>
			</div>
			<Settings />
		</div>
	);
};

export default Home;
