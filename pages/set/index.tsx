import type { NextPage } from 'next';
import Head from 'next/head';
import Arweave from 'arweave';
import { useState, useEffect } from 'react';
import SetCard from '../../components/set/card';
import CardsApplet from '../../components/cardsApplet';
import styles from '../../styles/set/Set.module.css'
import { loadSet } from '../../utils/lib';
import { Set } from '../../types/types';

const SetPage: NextPage = () => {
  const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
  });
  const [set, setSet] = useState<Set>({title: '', cards: []});
  const [isLoading, setIsLoading] = useState(true);
  let tx_id : string;
  try {
    const params = new URLSearchParams(window.location.search);
    tx_id = params.get('tx_id') || '';
  } catch {
    // catch when window undefined (e.g. in server-side rendering)
    tx_id = '';
  }

  useEffect(() => {
    loadSet(tx_id).then(response => {
      setSet(response);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>View Set - 3cards</title>
      </Head>
      <main className={styles.main}>
        <h3>View Set</h3>
        { isLoading ? 
            <div className="lds-dual-ring"></div> : 
            set.cards.length === 0 ? <p>Set not found</p> : <SetContent cards={set.cards} title={set.title} /> }
      </main>
    </div>
  )
}

const SetContent = (props: {
  cards : string[][],
  title : string
}) => {
  return <div className={styles.set_content}>
    <CardsApplet cards={props.cards} />
    <h4
      className={styles.title}
    >{ props.title }</h4>
    <div className={styles.terms}>
      {
        props.cards.map((card, index) => {
          return(
            <SetCard
              key={index}
              id={index}
              card={card}
            />
          );
        })
      }
    </div>
  </div>
}

export default SetPage
