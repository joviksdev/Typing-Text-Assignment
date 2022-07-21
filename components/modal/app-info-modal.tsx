import React from 'react';
import ModalWrapper from '.';
import ApplicationInfo from '../app-info';

const AppInfoModal = () => {
	return (
		<ModalWrapper hideCloseButton title={'Welcome to Typing Text Challange'}>
			<ApplicationInfo />
		</ModalWrapper>
	);
};

export default AppInfoModal;
