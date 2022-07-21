import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './attempt-challenge.module.css';
import AttemptChallangeForm from '../forms/attempt-challange-form';

const AttemptChallange = () => {
	const { challenge } = useAppSelector((store) => store.appState);
	return (
		<div style={{ paddingTop: '2rem' }} className='container'>
			<h2 className={styles.title}>
				<span>Challange Paragraph</span>: {challenge?.paragraph}
			</h2>
			<div>
				<p className={styles.text}>Enter the challange to earn score</p>

				<AttemptChallangeForm />
			</div>
		</div>
	);
};

export default AttemptChallange;
