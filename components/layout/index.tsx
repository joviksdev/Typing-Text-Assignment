import React, { ReactNode } from 'react';
import Header from '../header';
import styles from './layout.module.css';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default Layout;
