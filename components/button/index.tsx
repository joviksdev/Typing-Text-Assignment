import React from 'react';
import { ButtonProps } from '../../utilities/types';

const Button = ({ children, style, ...rest }: ButtonProps) => {
	return (
		<button style={{ border: 'none', ...style }} {...rest}>
			{children}
		</button>
	);
};

export default Button;
