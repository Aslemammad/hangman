import React, { useRef, MutableRefObject, useLayoutEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { TweenMax } from 'gsap';
//Todo: Not responsive when animation is active (Mobile)
const useStyles = createUseStyles({
	'@keyframes animation': {
		'25%': {
			transform: 'translateX(1rem)'
		},
		'50%': {
			transform: 'translateX(-1rem)'
		},
		'75%': {
			transform: 'translateX(0)'
		}
	},
	background: {
		position: 'absolute',
		width: '100%',
		'z-index': -10
		// animation: '$animation 2s infinite'
	},
	span: {
		'z-index': -9,
		position: 'absolute'
	}
});

// impress js in react
// create DE in linux
const Background: React.FC = () => {
	const classes = useStyles();
	const alphabetical = 'ABCDEFGHIJKLMNORPSTUVWXYZ'.split('');
	const lettersRef = useRef([]) as MutableRefObject<HTMLSpanElement[]>;

	useLayoutEffect(() => {
		lettersRef.current.map((letter: HTMLSpanElement, index) => {
			TweenMax.to(
				[
					letter
				],
				0.5,
				{
					repeat: -1,
					yoyo: true,
					y: -20 * Math.random() + -20
				}
			);
			TweenMax.to(
				[
					letter
				],
				1,
				{
					x: 40 * Math.random(),
					repeat: -1,
					yoyo: true
				}
			);
		});
	}, []);
	return (
		<div className={classes.background}>
			{alphabetical.map((letter) => {
				const constRandom = Math.random();

				return (
					<span
						ref={(ref) => (lettersRef.current[lettersRef.current.length] = ref as HTMLSpanElement)}
						key={letter}
						className={classes.span}
						style={{
							top: `${constRandom * window.innerHeight / 18 + 1}rem`,
							left: `${Math.random() * (window.innerWidth / 18) + 1}rem`,
							color: Math.random() > 0.5 ? 'rgba(250, 210, 46, 1)' : 'rgba(0, 0, 0, 1)'
						}}>
						{letter}
					</span>
				);
			})}
		</div>
	);
};
export default React.memo(Background);
