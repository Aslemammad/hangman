import React, { forwardRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { navigate } from 'hookrouter';
import { useStore } from '../store';
import { Button, EmojiContainer, Settings, Transition } from '../components/';
import { Store } from '../interfaces';
import AboutModal from '../components/modals/About';
import { TweenMax, gsap } from 'gsap';
import DetailsModal from '../components/modals/Details';
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
const Home: React.FC<any> = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	return (
		<div className={classes.home} ref={ref}>
			<h1 className={classes.title}>Hangman</h1>
			<EmojiContainer primary />
			<div className={classes.buttons}>
				<Button primary onClick={() => navigate('/game')} />
				<Button
					onClick={() => {
						setState((prevState: Store) => ({
							...prevState,
							players: [
								{ points: 0, active: true },
								{ points: 0, active: false }
							]
						}));
						navigate('/game');
					}}
				/>
			</div>
			<DetailsModal
				open={state.detailsModal}
				onClick={() => setState((prevState: Store) => ({ ...prevState, aboutModal: false }))}
			/>
			<AboutModal
				open={state.aboutModal}
				onClick={() => setState((prevState: Store) => ({ ...prevState, aboutModal: false }))}
			/>
			<Settings title='Music, Difficulty, About' />
		</div>
	);
});

export default Transition(Home);
