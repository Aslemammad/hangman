import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { A } from 'hookrouter';
import Timer from 'react-compound-timer';
import { useStore } from '../store';
import { Store, defaultStore } from '../interfaces';
import { RoundsSVG, HomeSVG } from './assets';
const useStyles = createUseStyles({
	header: {
		width: '100%',
		display: 'flex',
		'font-family': 'Ubuntu, sans-serif',
		'font-size': '2rem',

		'justify-content': 'space-between',
		padding: '1rem'
	},
	round: {
		display: 'flex',
		'align-items': 'center',
		'& svg': {
			'margin-left': '1rem'
		}
	}
});
const Header: React.FC = () => {
	const classes = useStyles();
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
			timeEnd: false
		}));
	const handleTimeEnd = (timeEnd: boolean) => setState((prevState: Store) => ({ ...prevState, timeEnd }));
	useEffect(() => handleChangeRoute, []);

	return (
		<div className={classes.header}>
			<A href='/' onClick={handleChangeRoute}>
				<HomeSVG />
			</A>
			{!state.timeEnd ? (
				<Timer
					initialTime={30 * 1000}
					direction='backward'
					checkpoints={[
						{
							time: 59 * 1000,
							callback: () => handleTimeEnd(false)
						},
						{
							time: 0,
							callback: () => handleTimeEnd(true)
						}
					]}>
					<Timer.Seconds />
				</Timer>
			) : null}

			<div className={classes.round}>
				{state.round}
				<RoundsSVG />
			</div>
		</div>
	);
};

export default Header;
