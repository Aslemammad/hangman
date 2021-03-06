import React from 'react';
import { createUseStyles } from 'react-jss';
import { useStore } from '../store';
import { Store } from '../interfaces';
import { CircleButton } from './';
import { IranSVG, EnglandSVG, InActiveSoundSVG, ActiveSoundSVG, Question } from './assets';
import ToolTip from './ToolTip';
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
	const handleChangeDifficulty = () =>
		setState((prevState: Store) => ({
			...prevState,
			difficulty: prevState.difficulty == 3 ? 1 : prevState.difficulty + 1
		}));
	const handleAboutClick = () => setState((prevState: Store) => ({ ...prevState, aboutModal: true }));
	return (
		<div className={classes.settings}>
			<CircleButton onClick={handleChangeSound}>
				{state.sound ? <ActiveSoundSVG /> : <InActiveSoundSVG />}
			</CircleButton>

			<CircleButton onClick={handleChangeDifficulty}>{state.difficulty}</CircleButton>
			<CircleButton onClick={handleAboutClick}>
				<Question />
			</CircleButton>
		</div>
	);
};

export default ToolTip(Settings);
