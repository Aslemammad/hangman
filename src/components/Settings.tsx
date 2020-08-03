import React from 'react';
import { createUseStyles } from 'react-jss';
import { useStore } from '../store';
import { Store } from '../interfaces';
import CircleButton from './CircleButton';
import Iran from '../assets/iran.svg';
import England from '../assets/england.svg';
import InActiveSound from '../assets/inactive-sound.svg';
import ActiveSound from '../assets/active-sound.svg';
const useStyles = createUseStyles({
	settings: {
		display: 'flex',
		position: 'absolute',
		bottom: '1rem'
	}
});
const Settings = () => {
	const classes = useStyles();
	const [
		state,
		setState
	] = useStore();
	const handleChangeSound = () => setState((prevState: Store) => ({ ...prevState, sound: !prevState.sound }));
	const handleChangeLanguage = () => setState((prevState: Store) => ({ ...prevState, persian: !prevState.persian }));
	const handleChangeDifficulty = () =>
		setState((prevState: Store) => ({
			...prevState,
			difficulty: prevState.difficulty == 3 ? 1 : prevState.difficulty + 1
		}));
	return (
		<div className={classes.settings}>
			<CircleButton onClick={handleChangeSound}>{state.sound ? <ActiveSound /> : <InActiveSound />}</CircleButton>
			<CircleButton onClick={handleChangeLanguage}>{state.persian ? <Iran /> : <England />}</CircleButton>
			<CircleButton onClick={handleChangeDifficulty}>{state.difficulty}</CircleButton>
		</div>
	);
};

export default Settings;
