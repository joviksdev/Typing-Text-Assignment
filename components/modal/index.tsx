import React, { ReactNode } from 'react';
import styles from './modal.module.css';

type Props = {
	children: ReactNode;
	title?: ReactNode;
	close?: () => void;
	hideCloseButton?: boolean;
};

const ModalWrapper = ({ children, title, close, hideCloseButton }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div>
					{title && typeof title === 'string' ? (
						<h2 className={styles.title}>{title}</h2>
					) : (
						<>{title}</>
					)}
					{!hideCloseButton && (
						<div
							onClick={() => typeof close !== 'undefined' && close()}
							className={styles.close}
						>
							close
						</div>
					)}
				</div>
				<div className={styles.children}>{children}</div>
			</div>
		</div>
	);
};

export default ModalWrapper;
