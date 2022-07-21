import React, { useState } from 'react';
import Button from '../button';
import styles from './start-challenge.module.css';
import NewChallangeForm from '../forms/new-challange-form';
import SpecifyDuration from '../modal/specify-duration';

const StartChallange = () => {
	const [isDisplayForm, setDisplayForm] = useState<boolean>(false);
	const randomParagraph = require('random-paragraph');
	const [isDisplayDurationModal, setDisplayDurationModal] =
		useState<boolean>(false);

	return (
		<>
			{isDisplayDurationModal && (
				<SpecifyDuration
					paragraph={randomParagraph({ sentences: 1 })}
					close={() => setDisplayDurationModal(false)}
				/>
			)}
			<div style={{ paddingTop: '2rem' }} className='container'>
				{isDisplayForm ? (
					<div
						style={{ maxWidth: '540px', width: '100%' }}
						className={styles.grid}
					>
						<NewChallangeForm />
						<div className={styles.or}>OR</div>
						<Button
							onClick={() => setDisplayForm(false)}
							className={styles.button}
						>
							Cancel
						</Button>
					</div>
				) : (
					<>
						<div className={styles.grid}>
							<div>
								<p className={styles.text}>
									Click the start button to begin challange
								</p>
								<Button
									onClick={() => setDisplayDurationModal(true)}
									className={styles.button}
								>
									Start
								</Button>
							</div>
							<div className={styles.or}>OR</div>
							<div>
								<Button
									onClick={() => setDisplayForm(true)}
									className={styles.button}
								>
									Enter paragraph text
								</Button>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default StartChallange;
