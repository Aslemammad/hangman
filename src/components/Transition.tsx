import React, { useRef, MutableRefObject, useEffect, useLayoutEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

const Transition = (Component: React.ComponentType<any>) => () => {
	const ref = useRef() as MutableRefObject<HTMLDivElement>;
	const timeline = new TimelineMax({ paused: true });
	useLayoutEffect(() => {
		timeline.from(ref.current, 0.8, {
			// y: 25,
			autoAlpha: 0,
			ease: Power1.easeInOut
		});
		timeline.play();

		return () => {
			timeline.reverse();
		};
	}, []);
	return (
		<React.Fragment>
			<Component ref={ref} />
		</React.Fragment>
	);
};
export default Transition;
