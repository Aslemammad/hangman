/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
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
			'font-size': '.9rem',
			'font-weight': '100'
		}
	}
});
const About = () => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	const handleCloseModal = () => setState((prevState: Store) => ({ ...prevState, aboutModal: false }));
	return (
		<div className={classes.modal}>
			<h1>
				<span>About</span>
			</h1>
			<p>Simple word guessing game for people who wants learn English and have fun</p>
			<i>Note: Sometimes the thesaurus API doesn't work as well as it can, So sorry.</i>
			<br />
			<i>
				2 players: You can play with your friend in this game, So pay attention to the yellow field, because the
				current game is for the yellow field's gamer.
			</i>
			<Button title='OK!' primary onClick={handleCloseModal} />
		</div>
	);
};
export default Modal(About);
