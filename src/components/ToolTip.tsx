import React from 'react';
import ReactToolTip from 'react-tooltip';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
	tooltip: {
		width: '100%',
		height: '100%',
		display: 'flex',
		'justify-content': 'center'
	}
});
const ToolTip = (Component: React.ComponentType) => ({ title }: { title: string }): JSX.Element => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.tooltip} data-tip={title}>
				<Component />
			</div>
			<ReactToolTip />
		</React.Fragment>
	);
};
export default ToolTip;
