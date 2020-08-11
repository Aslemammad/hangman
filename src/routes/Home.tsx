import React from 'react';
import { createUseStyles } from 'react-jss';
import { navigate } from 'hookrouter';
import { useStore } from '../store';
import { Button, EmojiContainer, Settings } from '../components/';
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
		'font-size': '4rem'
	},
	buttons: {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	},
	settings: {}
});
const Home: React.FC<any> = ({ morph }: { morph: any }) => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	return (
		<div className={classes.home} {...morph}>
			<h1 className={classes.title}>Hangman</h1>
			<EmojiContainer primary />
			<div className={classes.buttons}>
				<Button primary onClick={() => navigate('/game')} />
				<Button
					onClick={() => {
						setState((prevState: Store) => ({
							...prevState,
							playerTwo: { points: 0 }
						}));
						navigate('/game');
					}}
				/>
			</div>
			<Settings />
		</div>
	);
};

export default Home;
