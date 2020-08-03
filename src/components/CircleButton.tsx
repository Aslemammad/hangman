import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	button: {
		border: 'none',
		'border-radius': '50%',
		padding: '8px',
		width: '45px',
		height: '45px',
		background: '#FAD22E',
		'font-family': 'Ubuntu, sans-serif',
		margin: '2px',
		'font-size': '18px',
		'&:focus': {
			outline: 'none'
		}
	}
});

const CircleButton: React.FC<any> = ({ onClick, children }: { onClick: any; children: React.ReactChildren }) => {
	const classes = useStyles();
	return (
		<button className={classes.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default CircleButton;
