import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import Nav from '../components/nav';
import Term from '../components/term';
import styles from '../styles/Create.module.css'

const Set: NextPage = () => {
  const [terms, setTerms] = useState([['mydef', 'myval'], ['', '']]);

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
                <Term
                  key={index}
                  id={index}
                  termPair={terms[index]}
                />
              );
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Set
