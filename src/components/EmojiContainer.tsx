import React from 'react';
import Smile from '../assets/smile.svg';

const emojis = [
	{
		id: 1,
		name: 'smile',
		component: Smile
	}
];

const EmojiContainer: React.FC<any> = () => {
	console.log(Smile.name);
	return <Smile />;
};

export default EmojiContainer;
