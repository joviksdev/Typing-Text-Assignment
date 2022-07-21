import '../styles/globals.css';
import { ReactNode, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { useAppSelector } from '../store/hooks';
import AppInfoModal from '../components/modal/app-info-modal';
import ScoreModal from '../components/modal/score-modal';

type NextAppProps = {
	children: ReactNode;
};

const NextApp = ({ children }: NextAppProps) => {
	const { isDisplayAppInfo, hasChallengeEnd } = useAppSelector(
		(store) => store.appState
	);
	const [isDisplayInfo, setDisplayInfo] = useState<boolean>(false);
	useEffect(() => {
		if (isDisplayAppInfo) {
			setDisplayInfo(isDisplayAppInfo);
		}
	}, [isDisplayAppInfo]);

	return (
		<>
			{isDisplayInfo && <AppInfoModal />}
			{hasChallengeEnd && <ScoreModal />}
			<div>{children}</div>
		</>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<NextApp>
				<Component {...pageProps} />
			</NextApp>
		</Provider>
	);
}

export default MyApp;
