import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav';
import styles from '../styles/Create.module.css'

const CreateTerm = (props: { id: string}) => {
  return(
    <div className={styles.term}>
      <div className={styles.term_header}>
        <div>{props.id}</div>
        <div className={styles.term_ops}>
          <div>↑</div>
          <div>↓</div>
          <div>X</div>
        </div>
      </div>
      <div className={styles.term_input}>
        <input type="text" placeholder="term"></input>
        <input type="text" placeholder="definition"></input>
      </div>
    </div>
  )
}

const Create: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Set - 3cards</title>
        <meta name="description" content="Create a flash card set with 3cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h3>Create Set</h3>
        <div className={styles.terms}>
          <CreateTerm 
            id="1"
          />
          <CreateTerm 
            id="2"
          />
        </div>
        <div className={styles.addItem} tabIndex={0}>
          <p>Add item +</p>
        </div>
      </main>
    </div>
  )
}

export default Create
