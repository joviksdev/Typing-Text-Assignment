import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setChallenge, setEndChallange } from '../../store/app';
import { MINUTES } from '../../utilities/constant';

const Timer = () => {
	const dispatch = useAppDispatch();
	const { challenge } = useAppSelector((store) => store.appState);
	const [coundDown, setCountdown] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const clearChallange = () => {
		dispatch(setChallenge(null));
		dispatch(setEndChallange(true));
	};

	useEffect(() => {
		if (challenge) {
			const duration = challenge?.duration;
			let time = parseInt(duration) * MINUTES;
			let interval = setInterval(() => {
				time = time - 1;
				setCountdown(time);

				let divisor_for_minutes = time % (60 * 60);
				let minutes = Math.floor(divisor_for_minutes / 60);
				let divisor_for_seconds = divisor_for_minutes % 60;
				let seconds = Math.ceil(divisor_for_seconds);

				setSeconds(seconds);

				if (time > 60) {
					setMinutes(minutes);
				} else {
					setMinutes(0);
				}

				if (time === 0) {
					clearInterval(interval);
					clearChallange();
				}
			}, 1000);

			return () => {
				dispatch(setChallenge(null));
				clearInterval(interval);
			};
		} else {
			setCountdown(0);
		}
	}, [challenge]);

	return (
		<div>
			{coundDown === 0 ? null : (
				<h2>
					Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</h2>
			)}
		</div>
	);
};

export default Timer;
