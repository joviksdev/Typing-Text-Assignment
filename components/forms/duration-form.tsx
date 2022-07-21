import React, { useState } from 'react';
import TextInput from '../form-components/text-input';
import Button from '../button';
import styles from './forms.module.css';
import Select from '../form-components/select';
import { DURATIONS } from '../../utilities/constant';
import { setChallenge } from '../../store/app';
import { useAppDispatch } from '../../store/hooks';

type Props = {
	paragraph: string;
};

const DurationForm = ({ paragraph }: Props) => {
	const dispatch = useAppDispatch();
	const [duration, setDuration] = useState<string>('');

	const [durationError, setDurationError] = useState<string | null>(null);

	const [isDisplayCustomizeTimerInput, setDisplayCustomizerTimerInput] =
		useState<boolean>(false);

	const handleSubmit = () => {
		if (!duration) {
			setDurationError('Specify  challange duration');
		}

		if (duration) {
			setDurationError(null);
			dispatch(
				setChallenge({
					paragraph,
					duration,
				})
			);
		}
	};

	return (
		<form className={styles.form}>
			<div className={styles.formControl}>
				<div className={styles.grid}>
					{isDisplayCustomizeTimerInput ? (
						<TextInput
							error={durationError ? true : false}
							helperText={durationError}
							label={'Enter time duration'}
							type={'number'}
							fullWidth
							placeholder={'Enter time duration'}
							defaultValue={duration}
							onChange={(e: any) => {
								e.target.value.length > 0 && setDurationError(null);
								setDuration(e.target.value);
							}}
						/>
					) : (
						<div>
							<Select
								fullWidth
								error={durationError ? true : false}
								helperText={durationError}
								defaultValue={duration}
								onChange={(e: any) => {
									e.target.value.length > 0 && setDurationError(null);
									setDuration(e.target.value);
								}}
							>
								<option disabled value={''}>
									Select duration
								</option>
								{DURATIONS.map((duration) => (
									<option value={duration} key={duration}>
										{duration} min(s)
									</option>
								))}
							</Select>
							<p
								onClick={() => setDisplayCustomizerTimerInput(true)}
								className={styles.customizeTimeDuration}
							>
								Customize time duration?
							</p>
						</div>
					)}
				</div>
				<Button
					onClick={(e) => {
						e.preventDefault();
						handleSubmit();
					}}
					className={styles.button}
				>
					Start
				</Button>
			</div>
		</form>
	);
};

export default DurationForm;
