import type { NextPage } from 'next';
import Head from 'next/head';
import Arweave from 'arweave';
import { useState, useEffect } from 'react';
import Panel from '../../components/set/write/panel';
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

  useEffect(() => {
    let tx_id : string = (new URLSearchParams(window.location.search)).get('tx_id') || '';
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
        <h3>Set - Write</h3>
        { isLoading ? 
            <div className="lds-dual-ring"></div> : 
            set.cards.length === 0 ? 
              <p>Set not found</p> : 
              <Panel termPair={set.cards[0]} /> 
        }
      </main>
    </div>
  )
}

export default SetPage
