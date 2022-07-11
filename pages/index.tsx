import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <h1>3cards</h1>
      </nav>

      <main className={styles.main}>
        <h3>Flashcards for everybody</h3>
        <p>With 3cards, you can make and share flash card sets without fear of them being put behind a paywall or taken down</p>
        <Link href='/create'>
          <div className={styles.create_button}>Create a set</div>
        </Link>
      </main>
    </div>
  )
}

export default Home
