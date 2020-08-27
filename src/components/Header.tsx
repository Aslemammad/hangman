import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { A } from 'hookrouter';
import { useTimer } from 'react-compound-timer';
import { useStore } from '../store';
import { Store, defaultStore } from '../interfaces';
import { RoundsSVG, HomeSVG } from './assets';
import { Bar } from './';

const useStyles = createUseStyles({
	top: {
		width: '100%',
		height: '20%',
		padding: '1rem'
	},
	header: {
		width: '100%',

		display: 'flex',
		'font-family': 'Ubuntu, sans-serif',
		'font-size': '2rem',

		'justify-content': 'space-between',

		'margin-bottom': '2rem',
		'& span': {
			width: '3rem',
			display: 'flex',
			'justify-content': 'center'
		}
	},
	round: {
		display: 'flex',
		'align-items': 'center',
		'& svg': {
			'margin-left': '1rem'
		}
	},
	status: {
		'margin-bottom': '1rem',
		display: 'flex',
		'justify-content': 'space-between',
		'align-items': 'center',
		'text-align': 'center',
		'& span': {
			color: 'rgba(250, 210, 46, 1)'
		}
	}
});
const Header: React.FC = () => {
	const classes = useStyles();
	const { value, controls } = useTimer({
		initialTime: 30 * 1000,
		direction: 'backward',
		checkpoints: [
			{
				time: 59 * 1000,
				callback: () => handleTimeEnd(false)
			},
			{
				time: 0,
				callback: () => handleTimeEnd(true)
			}
		]
	});
	const [
		state,
		setState
	] = useStore();
	const handleChangeRoute = () =>
		setState((prevState: Store) => ({
			...defaultStore,
			sound: prevState.sound,
			difficulty: prevState.difficulty,
			persian: prevState.persian,
			timeEnd: false,
			detailsModal: true,
			lastGameRounds: prevState.round,
			lastGameWinner: state.players ? (state.players[0].points > state.players[1].points ? 1 : 2) : undefined
		}));
	const handleTimeEnd = (timeEnd: boolean) => setState((prevState: Store) => ({ ...prevState, timeEnd }));
	useEffect(() => {
		return handleChangeRoute;
	}, []);
	useEffect(
		() => {
			state.lastRound && controls.reset();
		},
		[
			state.lastRound
		]
	);

	return (
		<div className={classes.top}>
			<div className={classes.header}>
				<A href='/' onClick={handleChangeRoute}>
					<HomeSVG />
				</A>
				<span>{!state.timeEnd ? value.s : null}</span>
				<div className={classes.round}>
					{state.round}
					<RoundsSVG />
				</div>
			</div>
			<div className={classes.status} style={!state.players ? { justifyContent: 'center' } : {}}>
				<Bar>
					<p>
						<span>{state.remainGuesses + ' '}</span>
						chances. last guess was
						<span>{state.lastGuess ? ' right' : ' wrong'}</span>.
					</p>
				</Bar>
			</div>
		</div>
	);
};

export default Header;
