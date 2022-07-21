import React from 'react';
import ModalWrapper from '.';
import DurationForm from '../forms/duration-form';

type Props = {
	close?: () => void;
	paragraph: string;
};

const SpecifyDuration = ({ close, paragraph }: Props) => {
	return (
		<ModalWrapper
			close={() => typeof close !== 'undefined' && close()}
			title={'Specify Challange Duration'}
		>
			<div
				style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
			>
				<DurationForm paragraph={paragraph} />
			</div>
		</ModalWrapper>
	);
};

export default SpecifyDuration;
