import React, { useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	background: {
        'z-index':-10,
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		position: 'absolute',
		padding: '3rem'
	}
 
});
const Svg: React.FC = () => {

	const svgs = [];
	for (let index = 0; index < 12; index++) {
		const randomStyle = Math.random();
		svgs[svgs.length] = (
			<svg
				key={index}
				style={{
					position: 'relative',
					top: `${Math.random() * window.innerHeight + 1}px`,
					left: `${index * 200}px`,
					transform: `rotate(${Math.random() * 180 + 1}deg) matrix(-0.15, 0.99, 0.99, 0.15, 0, 0)`,
					stroke: randomStyle > 0.5 ? 'rgba(250, 210, 46, 1)' : 'rgba(0, 0, 0, 1)',
					filter: `drop-shadow( 0px 5px 5px rgba(${randomStyle > 0.5
						? '250, 210, 46, 0.75'
                        : '0, 0, 0, 0.55'}))`,
                        
				}}
				xmlns='http://www.w3.org/2000/svg'
				width='42'
				height='48'
				viewBox='0 0 39 48'
				fill='none'>
				<path d='M1.00903 7.60134C34.0727 0.601402 38.8627 44.2047 34.0727 41.5695' strokeWidth='4' />
			</svg>
		);
	}
	return <React.Fragment>{svgs}</React.Fragment>;
};
const Background: React.FC = () => {
	const classes = useStyles();
	const elementRef = useRef() as React.RefObject<HTMLDivElement>;

	console.log(window.innerWidth);
	return (
		<div className={classes.background} ref={elementRef}>
			<Svg />
		</div>
	);
};
export default Background;
