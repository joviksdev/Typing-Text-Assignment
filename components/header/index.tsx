import React from 'react';
import styles from './header.module.css';
import Timer from '../timer';
import Button from '../button';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setChallenge } from '../../store/app';

type Props = {
	title?: string;
};

const Header = ({ title = 'Typing Text Assignment' }: Props) => {
	const { challenge } = useAppSelector((store) => store.appState);
	const dispatch = useAppDispatch();
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h2 className={styles.title}>{title}</h2>

				<div className={styles.buttonTimerWrapper}>
					<Timer />
					{challenge && (
						<Button
							onClick={() => dispatch(setChallenge(null))}
							className={styles.button}
						>
							End Challenge
						</Button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
