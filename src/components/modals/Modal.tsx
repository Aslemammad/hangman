import React, { useRef, MutableRefObject, useEffect } from 'react';
import ReactModal from 'react-modal';
import { TweenMax, Power1 } from 'gsap';
ReactModal.setAppElement('#root');
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '50%',
		border: '1px solid #000000'
	}
};
const Modal = (Component: React.ComponentType<any>) => ({ open, onClick }: { open: boolean; onClick: () => void }) => {
	return (
		<ReactModal isOpen={open} style={customStyles}>
			<Component />
		</ReactModal>
	);
};
export default Modal;
