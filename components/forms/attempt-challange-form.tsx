import React, { useState, useEffect } from 'react';
import TextArea from '../form-components/text-area';
import Button from '../button';
import styles from './forms.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setScore, setEndChallange, setChallenge } from '../../store/app';
import calculateScore from '../../utilities/helpers/calculateScore';

const AttemptChallangeForm = () => {
	const dispatch = useAppDispatch();
	const { challenge } = useAppSelector((store) => store.appState);
	const [input, setInput] = useState<string>('');

	const [inputError, setInputError] = useState<string | null>(null);

	const dispatchResult = (score: number) => {
		dispatch(setScore(score));
	};

	const handleSubmit = () => {
		if (!input) {
			setInputError('Enter paragraph text');
		}

		if (input && challenge) {
			setInputError(null);
			dispatch(setEndChallange(true));
			dispatch(setChallenge(null));
		}
	};

	const handleChange = (value: string) => {
		setInput(value);
		if (challenge) {
			const score = calculateScore({
				paragraph: challenge.paragraph,
				input: value,
			});
			dispatchResult(score);
		}
	};

	return (
		<form className={styles.form}>
			<div className={styles.formControl}>
				<TextArea
					error={inputError ? true : false}
					helperText={inputError}
					fullWidth
					rows={6}
					placeholder={'Enter challange text'}
					defaultValue={input}
					onChange={(e: any) => handleChange(e.target.value)}
				/>
				<Button
					onClick={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					className={styles.button}
				>
					Submit
				</Button>
			</div>
		</form>
	);
};

export default AttemptChallangeForm;
