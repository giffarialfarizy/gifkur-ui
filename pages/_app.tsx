import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

import '../styles/tailwind.css';
import '../styles/globals.scss';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({
	Component,
	pageProps,
}: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? (page => page);

	return getLayout(
		<ThemeProvider enableSystem={true} attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
