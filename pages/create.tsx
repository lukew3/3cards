import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import Arweave from 'arweave';
import React, { useState } from 'react';
import CreateTerm from '../components/createTerm';
import styles from '../styles/Create.module.css'

const Create: NextPage = () => {
  const arweave = Arweave.init({});
  const [title, setTitle] = useState('');
  const [terms, setTerms] = useState([['', ''], ['', '']]);
  
  const publishSet = async () => {
    if (title === '') {
      alert('Please give your set a title');
      return;
    }
    let newTerms = terms.filter(item => item[0] !== '' && item[1] !== '');
    console.log(JSON.stringify(newTerms));
    const tx = await arweave.createTransaction({
      data: JSON.stringify(newTerms)
    });
    tx.addTag('App-Name', '3cards');
    tx.addTag('Title', title);
    tx.addTag('Content-Type', 'application/json');
    tx.addTag('Version', '0.0.2');
    // Unix-Time tag?
    try {
      let result = await window.arweaveWallet.dispatch(tx);
      Router.push({
        pathname: '/set',
        query: {
          tx_id: result.id
        }
      });
    } catch (err) {
      console.log(err);
      alert("Could not publish set. Are you logged in?");
    }
  }

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
    [newTerms[index1], newTerms[index2]] = [newTerms[index2], newTerms[index1]];
    setTerms(newTerms);
  }

  const incTermPos = (index : number) => {
    if (index < terms.length - 1) swapTerms(index, index + 1);
  }

  const decTermPos = (index : number) => {
    if (index > 0) swapTerms(index, index - 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Set - 3cards</title>
        <meta name="description" content="Create a flash card set with 3cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Create Set</h3>
        <input
          className={styles.title_input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          <div 
            className={styles.publish_button}
            onClick={publishSet}
          >
            Publish
          </div>
        </div>
      </main>
    </div>
  )
}

export default Create
