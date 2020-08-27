import React, { useRef, MutableRefObject, useEffect, useLayoutEffect } from 'react';
import { useMousePosition } from 'custom-react-hooks';
import { TweenMax, Linear } from 'gsap';
const Animation = (Component: React.ComponentType<any>) => (props: React.Props<any>) => {
	const faceRef = useRef() as MutableRefObject<SVGPathElement | SVGGElement>;
	const mousePosition: { x: number; y: number } = useMousePosition() || { x: 0, y: 0 };
	useLayoutEffect(
		() => {
			const coordinates = faceRef.current.getBoundingClientRect();
			const subtracts = {
				x: (mousePosition.x - coordinates.left) / coordinates.left * 7,
				y: (mousePosition.y - coordinates.top) / coordinates.top * 7
			};

			TweenMax.to(
				[
					faceRef.current
				],
				0.2,
				{
					ease: Linear.easeNone,
					x: subtracts.x,
					y: subtracts.y
				}
			);
		},
		[
			mousePosition.x,
			mousePosition.y
		]
	);

	return (
		<React.Fragment>
			<Component ref={(ref) => (faceRef.current = ref as SVGPathElement | SVGGElement)} {...props} />{' '}
		</React.Fragment>
	);
};
export default Animation;
