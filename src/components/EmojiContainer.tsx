import React from 'react';
import Smile from './emoji/Smile';
const emojis = [
	{
		id: 1,
		name: 'smile',
		component: Smile
	}
];

const EmojiContainer: React.FC<any> = () => {
	return <Smile />;
};

export default EmojiContainer;
