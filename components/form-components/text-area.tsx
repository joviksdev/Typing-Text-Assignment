import React from 'react';
import { TextAreaProps } from '../../utilities/types';
import styles from './form-components.module.css';
import { PRIMARY_COLOR } from '../../utilities/constant';

const TextArea = ({
	error,
	helperText,
	fullWidth,
	label,
	rows,
	...rest
}: TextAreaProps) => {
	return (
		<div>
			{label && <label className={styles.label}>{label}</label>}
			<textarea
				style={{
					width: fullWidth ? '100%' : 'initial',
					border: error ? '1px solid red' : `1px solid ${PRIMARY_COLOR}`,
				}}
				className={styles.textArea}
				rows={rows}
				{...rest}
			/>

			{error && <p className={styles.errorText}>{helperText}</p>}
		</div>
	);
};

export default TextArea;
