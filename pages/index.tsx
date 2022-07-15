import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>3cards</title>
        <meta name="description" content="Flashcards without the middleman. No ads, no paywalls, no takedowns." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/logo.svg" className={styles.logo} alt="3cards" />
        <h3 className={styles.main_desc}>Flashcards Without the Middleman</h3>
        <p className={styles.sub_desc}>No ads, no paywalls, no takedowns</p>
        <div className={styles.buttons_group}>
          <Link href="/sets">
            <a className={styles.button}>Browse Sets</a>
          </Link>
          <Link href='/create'>
            <a className={styles.button}>Create a set</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
