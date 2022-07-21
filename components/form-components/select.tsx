import React from 'react';
import { SelectProps } from '../../utilities/types';
import styles from './form-components.module.css';
import { PRIMARY_COLOR } from '../../utilities/constant';

const Select = ({
	error,
	helperText,
	fullWidth,
	label,
	children,
	...rest
}: SelectProps) => {
	return (
		<div>
			{label && <label className={styles.label}>{label}</label>}
			<select
				{...rest}
				className={styles.select}
				style={{
					width: fullWidth ? '100%' : 'initial',
					border: error ? '1px solid red' : `1px solid ${PRIMARY_COLOR}`,
				}}
			>
				{children}
			</select>
			{error && <p className={styles.errorText}>{helperText}</p>}
		</div>
	);
};

export default Select;
