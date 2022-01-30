import type { ReactElement } from 'react';
import useChangeTheme from '../hooks/useChangeTheme';

import VisitorTemplate from '../components/layouts/VisitorLayout';

const Home = () => {
	const changeTheme = useChangeTheme();

	return (
		<main className='h-screen bg-white dark:bg-slate-700'>
			<h1 className='p-4 pt-2 text-3xl font-bold text-blue-900 underline dark:text-blue-500'>
				Hello world!
			</h1>
			<div className='p-4'>{changeTheme}</div>
			<button className='bg-red-500'>tes</button>
		</main>
	);
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
	return <VisitorTemplate>{page}</VisitorTemplate>;
};
