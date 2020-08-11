import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	button: {
		border: 'none',
		'border-radius': '50%',
		width: '3rem',
		height: '3rem',
		background: '#FAD22E',
		'font-family': 'Ubuntu, sans-serif',
		margin: '.2rem',
		'font-size': '1.5rem',
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center',
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
