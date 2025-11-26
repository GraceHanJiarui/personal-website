import '../css/main.css';
import HashScroll from '../components/HashScroll';
// import type { AppProps } from 'next/app';
import { LocaleProvider } from '../utils/i18n/LocaleProvider';

export default function MyApp({ Component, pageProps }) {
    return (
    <LocaleProvider>
        <HashScroll />
        <Component {...pageProps} />
    </LocaleProvider>
    );
}
