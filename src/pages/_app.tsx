import type { AppProps } from 'next/app';
import { breakpoints } from 'src/styles/constants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';

const theme = {
	breakpoints
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
