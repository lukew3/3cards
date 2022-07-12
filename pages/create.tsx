import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import Nav from '../components/nav';
import CreateTerm from '../components/createTerm';
import styles from '../styles/Create.module.css'

const Create: NextPage = () => {
  const [terms, setTerms] = useState([['', ''], ['', '']]);

  const addTerm = () => {
    setTerms(state => [...state, ['', '']]);
  }

  const deleteTerm = (index : number) => {
    setTerms(state => [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]);
  }

  const setTermValue = (index : number, value : string) => {
    let newTerms = [...terms];
    newTerms[index][0] = value;
    setTerms(newTerms)
  }

  const setDefValue = (index : number, value : string) => {
    let newTerms = [...terms];
    newTerms[index][1] = value;
    setTerms(newTerms)
  }

  const swapTerms = (index1 : number, index2 : number) => {
    let newTerms = [...terms];
    let temp = newTerms[index1];
    newTerms[index1] = newTerms[index2];
    newTerms[index2] = temp;
    setTerms(newTerms);
  }

  const incTermPos = (index : number) => {
    if (index < terms.length - 1) {
      swapTerms(index, index + 1);
    }
  }

  const decTermPos = (index : number) => {
    if (index > 0) {
      swapTerms(index, index - 1);
    }
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
                  key={index}
                  id={index}
                  termPair={terms[index]}
                  setTermValue={setTermValue}
                  setDefValue={setDefValue}
                  deleteTerm={deleteTerm}
                  incTermPos={incTermPos}
                  decTermPos={decTermPos}
                />
              );
            })
          }
          <div 
            className={styles.addItem} 
            tabIndex={0}
            onClick={addTerm}
          >
            <p>Add item +</p>
          </div>
          <div className={styles.publish_button}>
            Publish
          </div>
        </div>
      </main>
    </div>
  )
}

export default Create
