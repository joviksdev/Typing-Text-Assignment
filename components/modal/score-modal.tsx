import React from 'react';
import ModalWrapper from '.';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Button from '../button';
import styles from './modal.module.css';
import { setScore, setEndChallange } from '../../store/app';

const ScoreModal = () => {
	const { score, total } = useAppSelector((store) => store.appState);
	const dispatch = useAppDispatch();

	const handleClose = () => {
		dispatch(setScore(0));
		dispatch(setEndChallange(false));
	};

	return (
		<ModalWrapper hideCloseButton title={'Typing Text Challange Score'}>
			<div className={styles.scoreWrapper}>
				<div className={styles.dFlex}>
					<p>You score:</p>

					<h2>{score}</h2>
				</div>
				<div className={styles.dFlex}>
					<p>Total score:{'  '}</p>
					<h2>{total}</h2>
				</div>
				<Button
					onClick={() => handleClose()}
					style={{ marginTop: '2rem' }}
					className={styles.button}
				>
					Close
				</Button>
			</div>
		</ModalWrapper>
	);
};

export default ScoreModal;
