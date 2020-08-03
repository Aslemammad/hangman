import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	'@keyframes move': {
		// transform: 'translateX(40px)'

		'25%': {
			transform: 'translateX(-5px)'
		},
		'50%': {
			transform: 'translateX(3px)'
		},
		'75%': {
			transform: 'translateX(0)'
		}
	},
	move: {
		animation: '$move 2s infinite '
	}
});
const Smile = () => {
	const classes = useStyles();
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='160' height='171' fill='none' viewBox='0 0 166 171'>
			<path
				fill='url(#paint0_radial)'
				d='M82.219 159.358C46.036 159.358 7 135.979 7 84.678 7 33.379 46.036 10 82.219 10c20.101 0 38.647 6.813 52.394 19.238 14.914 13.626 22.825 32.864 22.825 55.44 0 22.578-7.911 41.682-22.825 55.309-13.747 12.424-32.422 19.371-52.394 19.371z'
			/>
			<path
				fill='#EB8F00'
				d='M144.589 39.637c6.912 11.49 10.517 25.17 10.517 40.386 0 22.577-7.911 41.681-22.825 55.307-13.747 12.425-32.422 19.372-52.394 19.372-23.421 0-47.984-9.82-62.483-30.647 13.954 23.593 40.203 34.654 65.077 34.654 19.972 0 38.647-6.946 52.394-19.371 14.914-13.626 22.825-32.73 22.825-55.307 0-17.02-4.5-32.143-13.111-44.394z'
			/>
			<path
				fill='#422B0D'
				className={classes.move}
				d='M63.547 76.001l-.195-.267-.557-.734-.688-.762c-.285-.334-.622-.655-.946-1.002a9.3 9.3 0 00-1.09-.962 6.761 6.761 0 00-1.09-.721 3.103 3.103 0 00-.842-.334.934.934 0 00-.272 0h-.22.35-.714c-.195 0-.065 0 0 0h.104c.103 0 0 0 0 0h-.143a2.934 2.934 0 00-.856.334 8.635 8.635 0 00-1.09.721c-.375.294-.739.615-1.076.962-.687.681-1.297 1.336-1.686 1.857l-.674.802-.298.36a5.435 5.435 0 01-3.493 1.846 5.368 5.368 0 01-3.796-1.03 4.704 4.704 0 01-1.605-2.041 4.86 4.86 0 01-.301-2.609s.09-.534.337-1.483c.39-1.349.934-2.658 1.621-3.887a16.688 16.688 0 014.384-5.144 14.304 14.304 0 013.89-2.204c.39-.16.791-.28 1.193-.387.428-.134.856-.227 1.297-.308l.791-.12.662-.08h2.399c.44 0 .869.12 1.297.187.83.147 1.66.374 2.45.681a14.3 14.3 0 013.892 2.205 16.689 16.689 0 014.383 5.143c.402.695.752 1.43 1.037 2.178.247.6.454 1.202.623 1.83.09.32.169.641.207.962v.334c.39 2.725-1.452 5.263-4.098 5.664-.064.013-.13.013-.194.027-1.894.28-3.787-.495-4.993-2.018zM114.722 76.001l-.208-.267-.558-.734-.687-.762c-.285-.334-.622-.655-.947-1.002a9.287 9.287 0 00-1.089-.962 6.754 6.754 0 00-1.089-.721 3.115 3.115 0 00-.843-.334.939.939 0 00-.273 0h-.22.35-.713c-.195 0-.065 0 0 0h.103c.104 0 0 0 0 0h-.142a2.922 2.922 0 00-.856.334c-.376.2-.739.454-1.077.721a9.457 9.457 0 00-1.089.962c-.687.681-1.297 1.336-1.686 1.857l-.674.802-.286.36a5.45 5.45 0 01-3.499 1.846 5.385 5.385 0 01-3.802-1.03 4.705 4.705 0 01-1.605-2.041 4.86 4.86 0 01-.301-2.609s.09-.534.35-1.483a17.26 17.26 0 011.62-3.887 16.648 16.648 0 014.371-5.144 14.306 14.306 0 013.891-2.204 9.58 9.58 0 011.193-.387c.428-.134.856-.227 1.297-.308l.804-.12.648-.08h2.4c.441 0 .869.12 1.297.187.843.147 1.66.374 2.451.681 1.4.521 2.71 1.27 3.89 2.205a16.695 16.695 0 014.384 5.143c.402.695.752 1.43 1.037 2.178.247.587.454 1.189.623 1.803.09.32.168.641.207.962v.334a5.109 5.109 0 01-.876 3.715 4.831 4.831 0 01-3.17 1.99c-.039 0-.078.013-.117.013-1.932.334-3.89-.441-5.109-2.018zM132.372 95.68a7.602 7.602 0 00-3.996-3.528 7.33 7.33 0 00-5.264.028 140.093 140.093 0 01-40.968 5.918 140.097 140.097 0 01-40.968-5.918 7.318 7.318 0 00-5.251-.037 7.59 7.59 0 00-3.996 3.51c-1.764 3.353-.493 7.241.999 10.594 8.326 18.837 26.676 30.112 49.112 30.179h.208c22.436 0 40.787-11.342 49.125-30.179 1.479-3.38 2.763-7.214.999-10.567z'
			/>
			<path
				fill='#ED7770'
				className={classes.move}
				d='M102.907 131.109c-.48-.454-.973-.868-1.465-1.336-5.296-4.797-12.144-7.376-19.194-7.227-7.263-.121-14.33 2.364-19.998 7.04-.493.414-1.012.815-1.491 1.336-.48.521-.74.895-1.05 1.336a59.128 59.128 0 0022.396 4.302h.208c7.34 0 14.615-1.35 21.489-4.008a10.161 10.161 0 00-.895-1.443z'
			/>
			<path
				fill='#fff'
				className={classes.move}
				d='M123.112 92.18a140.093 140.093 0 01-40.968 5.918 140.098 140.098 0 01-40.968-5.918 7.318 7.318 0 00-5.251-.037 7.59 7.59 0 00-3.996 3.51 7.12 7.12 0 00-.596 1.59c.428.227.92.454 1.504.695 15.614 8.053 32.87 12.144 50.332 11.93 16.742.2 33.29-3.554 48.412-10.955a23.134 23.134 0 001.569-.762 7.366 7.366 0 00-.778-2.498 7.586 7.586 0 00-4.001-3.516 7.316 7.316 0 00-5.259.043z'
			/>
			<path
				fill='#EB8F00'
				className={classes.move}
				d='M132.424 95.693a7.685 7.685 0 00-4.031-3.535 7.414 7.414 0 00-5.294.022 140.069 140.069 0 01-40.955 5.918 140.097 140.097 0 01-40.968-5.918 7.318 7.318 0 00-5.251-.037 7.59 7.59 0 00-3.996 3.51c-1.764 3.353-.493 7.241.999 10.594a46.54 46.54 0 002.217 4.422s-2.723-10.394-.363-13.413a4.666 4.666 0 011.563-1.533 4.506 4.506 0 012.068-.631c.61 0 1.207.107 1.79.294a142.875 142.875 0 0041.708 6.145h.454a142.873 142.873 0 0041.707-6.145 5.844 5.844 0 011.79-.294c1.478.08 2.84.882 3.644 2.164 2.399 3.019-.363 13.453-.363 13.453.804-1.429 1.608-2.899 2.282-4.422 1.479-3.353 2.763-7.227.999-10.594z'
			/>
			<defs>
				<radialGradient
					id='paint0_radial'
					cx='0'
					cy='0'
					r='1'
					gradientTransform='matrix(73.87 0 0 76.095 82.219 84.679)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.5' stopColor='#FDE030' />
					<stop offset='0.92' stopColor='#F7C02B' />
					<stop offset='1' stopColor='#F4A223' />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default Smile;
