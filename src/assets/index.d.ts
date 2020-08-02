declare module '*.svg' {
	// import React = require('react');
	// 	const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	// 	export default ReactComponent;
	// const src: string;
	// export default src;
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}
