import React from 'react';
import { createUseStyles } from 'react-jss';
import Button from '../components/Button';
import EmojiContainer from '../components/EmojiContainer';
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
	}
});
const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.home}>
			<h1 className={classes.title}>Hangman</h1>
			<EmojiContainer />
			<div className={classes.buttons}>
				<Button primary />
				<Button />
			</div>
		</div>
	);
};

export default Home;
