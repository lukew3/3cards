import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import Nav from '../components/nav';
import styles from '../styles/Create.module.css'

const CreateTerm = (props: { id: number}) => {
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
  const [terms, setTerms] = useState([['', ''], ['', '']]);

  const addTerm = () => {
    setTerms(state => [...state, ['', '']]);
  }

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
          {
            terms.map((_, index) => {
              return(
                <CreateTerm
                  key={index+1}
                  id={index+1}
                />
              );
            })
          }
        </div>
        <div 
          className={styles.addItem} 
          tabIndex={0}
          onClick={addTerm}
        >
          <p>Add item +</p>
        </div>
      </main>
    </div>
  )
}

export default Create
