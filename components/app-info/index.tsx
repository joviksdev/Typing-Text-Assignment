import React from 'react';
import { calculateTime } from '../../utilities/helpers';
import { DEFAULT_TIMER } from '../../utilities/constant';
import styles from './app-info.module.css';
import { useAppDispatch } from '../../store/hooks';
import { setDisplayAppInfo } from '../../store/app';
import Storage from '../../utilities/storage';
import { StorageKeys } from '../../utilities/types';
import Button from '../button';

const ApplicationInfo = () => {
	const dispatch = useAppDispatch();

	const handleGetStarted = () => {
		console.log('click');
		dispatch(setDisplayAppInfo(false));
		Storage.saveItem(StorageKeys.AppUsage, 'used_app');
	};

	return (
		<div className={styles.container}>
			<p className={styles.text}>
				You will be presented with random text paragraph, and option to specify
				duration time
			</p>
			<p className={styles.text}>
				Please note that you have the option of specifying paragraph text of you
				choice and timer
			</p>
			<p className={styles.text}>
				Once the application timer is due, the quiz will close up, displaying
				your score.
			</p>
			<Button onClick={() => handleGetStarted()} className={styles.button}>
				Get started
			</Button>
		</div>
	);
};

export default ApplicationInfo;
