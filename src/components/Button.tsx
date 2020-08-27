import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	button: {
		'font-family': 'Ubuntu, sans-serif',
		'font-size': '1.5rem',
		width: '10rem',
		height: '2.7rem',
		background: '#FAD22E',
		border: 'none',
		'border-radius': '.6rem',
		margin: '1rem',
		transition: 'all .2s',
		'&:hover': {
			filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.15))'
		},
		'&:focus': {
			outline: 'none'
		}
	}
});

const Button: React.FC<any> = ({ onClick, primary, title }: { onClick: any; primary: boolean; title?: string }) => {
	const classes = useStyles();
	return (
		<button
			className={classes.button}
			style={
				!primary ? (
					{
						background: '#000000',
						color: '#FAD22E',
						fontSize: '1.2rem',
						width: '8rem',
						height: '2.5rem'
					}
				) : (
					{}
				)
			}
			onClick={onClick}>
			{title ? title : !primary ? '2 Players' : 'Play'}
		</button>
	);
};

export default Button;
