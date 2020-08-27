import React, { MutableRefObject, useRef, useEffect, forwardRef } from 'react';
import { TweenMax } from 'gsap';
import Animation from './Animation';
const Wrong: React.FC<any> = forwardRef(({ morph }: { morph: any }, ref: React.Ref<any>) => {
	const wholeEmoji = useRef() as MutableRefObject<SVGElement>;
	const liquidRef = useRef() as MutableRefObject<SVGGElement>;
	useEffect(() => {
		TweenMax.to(liquidRef.current, 1, {
			y: 20,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(wholeEmoji.current, 1, { opacity: 1 });
		return () => {
			TweenMax.to(wholeEmoji.current, 1, { opacity: 0 });
		};
	}, []);

	return (
		<svg
			ref={(ref) => (wholeEmoji.current = ref as SVGElement)}
			{...morph}
			opacity={0}
			xmlns='http://www.w3.org/2000/svg'
			width='166'
			height='200'
			fill='none'
			viewBox='0 0 166 171'>
			<path
				fill='url(#paint0_radial)'
				d='M82.481 158.709c-36.183 0-75.218-23.379-75.218-74.678 0-51.3 39.035-74.68 75.218-74.68 20.102 0 38.647 6.814 52.394 19.238C149.789 42.216 157.7 61.453 157.7 84.031c0 22.577-7.911 41.681-22.825 55.307-13.747 12.425-32.422 19.371-52.394 19.371z'
			/>
			<path
				ref={ref}
				fill='#EB8F00'
				d='M144.589 39.637c6.912 11.49 10.517 25.17 10.517 40.386 0 22.577-7.911 41.681-22.825 55.307-13.747 12.425-32.422 19.372-52.394 19.372-23.421 0-47.984-9.82-62.483-30.647 13.954 23.593 40.203 34.654 65.077 34.654 19.972 0 38.647-6.946 52.394-19.371 14.914-13.626 22.825-32.73 22.825-55.307 0-17.02-4.5-32.143-13.111-44.394z'
			/>
			<path
				fill='url(#paint1_linear)'
				d='M82.481 158.709c-36.183 0-75.218-23.379-75.218-74.678 0-51.3 39.035-74.68 75.218-74.68 20.102 0 38.647 6.814 52.394 19.238C149.789 42.216 157.7 61.453 157.7 84.031c0 22.577-7.911 41.681-22.825 55.307-13.747 12.425-32.422 19.371-52.394 19.371z'
			/>

			<g ref={ref}>
				<g ref={(ref) => (liquidRef.current = ref as SVGGElement)}>
					<path
						fill='url(#paint2_radial)'
						d='M25.315 142.945c-10.972 0-19.453-10.968-19.453-20.359 0-6.6 2.866-14.255 6.925-24.862.506-1.563 1.18-3.14 1.855-4.876 1.932-4.97 3.631-10.354 6.225-15.016a4.635 4.635 0 011.673-1.761 4.458 4.458 0 012.308-.647c.812 0 1.609.223 2.309.647a4.635 4.635 0 011.672 1.76c2.413 4.583 4.073 9.54 6.576 15.324 7.094 16.352 9.078 22.965 9.078 29.564.246 9.312-8.365 20.226-19.168 20.226z'
					/>
					<path
						fill='#81D4FA'
						d='M37.181 130.454c-2.477 4.008-8.105 3.207-8.105-3.353 0-4.195.83-25.73 4.331-22.711 5.68 4.903 7.302 20.48 3.774 26.064z'
					/>
				</g>{' '}
				<path
					fill='#422B0D'
					d='M83 133.46c4.993 0 9.947.882 14.655 2.579 9.986 3.593 18.636-8.016 12.839-17.1-6.044-9.392-15.446-12.064-27.494-12.064s-21.437 2.552-27.48 12.023c-5.81 9.098 2.852 20.681 12.838 17.1A42.862 42.862 0 0183 133.46z'
				/>
				<path
					fill='#422B0D'
					d='M35.521 53.13c-2.853.521-2.995 4.796.117 4.943 6.874.107 13.514-2.511 18.571-7.307a22.9 22.9 0 004.812-5.999c.752-1.109.493-2.632-.57-3.42-1.064-.788-2.556-.507-3.32.588l-.13.134c-5.097 5.864-11.958 9.752-19.48 11.061zM111.687 42.11l-.13-.134a2.38 2.38 0 00-1.539-1.007 2.333 2.333 0 00-1.781.406c-.256.185-.474.42-.642.693a2.511 2.511 0 00.072 2.727 22.873 22.873 0 004.837 5.971c5.058 4.796 11.698 7.401 18.571 7.281 3.113-.147 2.97-4.422.104-4.943-7.522-1.296-14.382-5.17-19.492-10.995zM57.063 66.717c-5.434 0-10.376 4.729-10.376 12.584 0 7.856 4.942 12.571 10.376 12.571 5.446 0 10.374-4.729 10.374-12.57 0-7.843-4.876-12.585-10.374-12.585z'
				/>
				<path
					fill='#896024'
					d='M56.609 71.967a3.627 3.627 0 00-2.835-.156 3.767 3.767 0 00-2.12 1.946 3.92 3.92 0 00.779 4.409c1.841.908 4.059.107 4.954-1.79a3.92 3.92 0 00-.778-4.41z'
				/>
				<path
					fill='#422B0D'
					d='M106.863 66.717c-5.434 0-10.376 4.729-10.376 12.584 0 7.856 4.942 12.571 10.376 12.571 5.433 0 10.375-4.729 10.375-12.57 0-7.843-4.942-12.585-10.375-12.585z'
				/>
				<path
					fill='#896024'
					d='M106.344 71.967a3.628 3.628 0 00-2.835-.156 3.765 3.765 0 00-2.119 1.946 3.92 3.92 0 00.778 4.409c1.841.908 4.059.107 4.954-1.79a3.921 3.921 0 00-.778-4.41z'
				/>
			</g>
			<defs>
				<radialGradient
					id='paint0_radial'
					cx='0'
					cy='0'
					r='1'
					gradientTransform='matrix(73.87 0 0 76.095 82.481 84.03)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.5' stopColor='#FDE030' />
					<stop offset='0.92' stopColor='#F7C02B' />
					<stop offset='1' stopColor='#F4A223' />
				</radialGradient>
				<linearGradient
					id='paint1_linear'
					x1='82.481'
					x2='82.481'
					y1='158.709'
					y2='9.352'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.39' stopColor='#40C0E7' stopOpacity='0' />
					<stop offset='1' stopColor='#5F7AFF' />
				</linearGradient>
				<radialGradient
					id='paint2_radial'
					cx='0'
					cy='0'
					r='1'
					gradientTransform='matrix(43.3156 0 0 68.7153 26.703 84.092)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.46' stopColor='#29B6F6' />
					<stop offset='1' stopColor='#1E88E5' />
				</radialGradient>
			</defs>
		</svg>
	);
});

export default Animation(Wrong);
