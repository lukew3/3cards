import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.wholePage}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icon-512x512.png" />
        <link rel="shortcut icon" href="/images/icon-512x512.png" />
        <meta name="description" content="Web3 flashcards" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
