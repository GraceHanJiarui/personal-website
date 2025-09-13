import '../css/main.css';
// import type { AppProps } from 'next/app';
import { LocaleProvider } from '../utils/i18n/LocaleProvider';

export default function MyApp({ Component, pageProps }) {
    return (
    <LocaleProvider>
        <Component {...pageProps} />
    </LocaleProvider>
    );
}
