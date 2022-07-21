import type { NextPage } from 'next';
import Layout from '../components/layout';
import StartChallange from '../components/start-challange';
import { useAppSelector } from '../store/hooks';
import AttemptChallange from '../components/attempt-challange';

const Home: NextPage = () => {
	const { challenge } = useAppSelector((store) => store.appState);
	return (
		<Layout>{challenge ? <AttemptChallange /> : <StartChallange />}</Layout>
	);
};

export default Home;
