import React from 'react';
import { TextInputProps } from '../../utilities/types';
import styles from './form-components.module.css';
import { PRIMARY_COLOR } from '../../utilities/constant';

const TextInput = ({
	error,
	helperText,
	fullWidth,
	label,
	...rest
}: TextInputProps) => {
	return (
		<div>
			{label && <label className={styles.label}>{label}</label>}
			<input
				style={{
					width: fullWidth ? '100%' : 'initial',
					border: error ? '1px solid red' : `1px solid ${PRIMARY_COLOR}`,
				}}
				className={styles.textInput}
				{...rest}
			/>
			{error && <p className={styles.errorText}>{helperText}</p>}
		</div>
	);
};

export default TextInput;
