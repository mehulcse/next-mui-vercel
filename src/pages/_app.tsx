import '@/styles/globals.css'
import * as React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from "@/styles/theme";
import createEmotionCache from '@/styles/createEmotionCache';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

interface Props {
	Component: any,
	emotionCache: EmotionCache,
	pageProps: Record<any, any>,
}

export default function App(props: Props) {
	const {
		Component, emotionCache =
			clientSideEmotionCache, pageProps
	} = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport"
				      content="initial-scale=1, width=device-width"/>
			</Head>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>

					{/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

					<CssBaseline/>
					<Component {...pageProps} />
				</ThemeProvider>
			</QueryClientProvider>
		</CacheProvider>
	);
}
