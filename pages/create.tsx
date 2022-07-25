import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import Arweave from 'arweave';
import React, { useState } from 'react';
import CreateCard from '../components/create/card';
import ImportFloater from '../components/importFloater';
import styles from '../styles/create/Create.module.css'

const Create: NextPage = () => {
  const arweave = Arweave.init({});
  const [title, setTitle] = useState('');
  const [cards, setCards] = useState([['', ''], ['', '']]);
  const [showingImport, setShowingImport] = useState(false);

  const publishSet = async () => {
    if (title === '') {
      alert('Please give your set a title');
      return;
    }
    let newTerms = cards.filter(card => card[0] !== '' && card[1] !== '');
    console.log(JSON.stringify(newTerms));
    const tx = await arweave.createTransaction({
      data: JSON.stringify(newTerms)
    });
    tx.addTag('App-Name', '3cards');
    tx.addTag('Title', title);
    tx.addTag('Card-Count', newTerms.length.toString());
    tx.addTag('Content-Type', 'application/json');
    tx.addTag('Version', '0.0.3');
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

  const addCard = () => {
    setCards(state => [...state, ['', '']]);
  }

  const deleteCard = (index : number) => {
    setCards(state => [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]);
  }

  const setTermValue = (index : number, value : string) => {
    let newCards = [...cards];
    newCards[index][0] = value;
    setCards(newCards)
  }

  const setDefValue = (index : number, value : string) => {
    let newCards = [...cards];
    newCards[index][1] = value;
    setCards(newCards)
  }

  const swapCards = (index1 : number, index2 : number) => {
    let newCards = [...cards];
    [newCards[index1], newCards[index2]] = [newCards[index2], newCards[index1]];
    setCards(newCards);
  }

  const incCardPos = (index : number) => {
    if (index < cards.length - 1) swapCards(index, index + 1);
  }

  const decCardPos = (index : number) => {
    if (index > 0) swapCards(index, index - 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Set - 3cards</title>
      </Head>
      <main className={styles.main}>
        <h3>Create Set</h3>
        <div
          className={styles.import_button}
          onClick={() => setShowingImport(true)}
        >Import</div>
        { showingImport ?
            <ImportFloater
              closeImport={() => setShowingImport(false)}
              setCards={setCards}
            /> : null }
        <div className={styles.title_group}>
          <input
            className={styles.title_input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Title</p>
        </div>
        <div className={styles.terms}>
          {
            cards.map((card, index) => {
              return(
                <CreateCard
                  key={index}
                  id={index}
                  card={card}
                  setTermValue={setTermValue}
                  setDefValue={setDefValue}
                  deleteCard={deleteCard}
                  incCardPos={incCardPos}
                  decCardPos={decCardPos}
                />
              );
            })
          }
          <div 
            className={styles.addItem} 
            tabIndex={0}
            onClick={addCard}
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
