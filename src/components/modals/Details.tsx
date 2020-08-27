import React from 'react';
import Modal from './Modal';
import { createUseStyles } from 'react-jss';
import Button from '../Button';
import { useStore } from '../../store';
import { Store } from '../../interfaces';

const useStyles = createUseStyles({
	modal: {
		'text-align': 'center',
		display: 'flex',
		'justify-content': 'center',
		'flex-direction': 'column',
		'font-size': '1rem',
		'align-items': 'center',
		'& h1': {
			'font-size': '3rem'
		},
		'& span': {
			color: 'rgba(250, 210, 46, 1)'
		},
		'& i': {
			'font-size': '.7rem',
			'font-weight': '100'
		}
	}
});

const Details = () => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	const handleCloseModal = () => setState((prevState: Store) => ({ ...prevState, detailsModal: false }));
	return (
		<div className={classes.modal}>
			<h1>
				<span>{state.lastGameRounds} rounds</span>
			</h1>
			<h5>
				Winner:{' '}
				{state.lastGameWinner ? state.lastGameWinner == 1 ? 'Player 1' : 'Player2' : 'No one is the winner'}
			</h5>
			<Button title='OK!' primary onClick={handleCloseModal} />
		</div>
	);
};

export default Modal(Details);
