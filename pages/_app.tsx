import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav';
import Footer from '../components/footer';
import styles from '../styles/App.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.wholePage}>
      <Nav />
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
