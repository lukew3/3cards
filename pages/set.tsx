import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useState } from 'react';
import SetCard from '../components/set/card';
import CardsApplet from '../components/cardsApplet';
import styles from '../styles/set/Set.module.css'

interface Tag {
  name: string,
  value: string,
}

const Set: NextPage = () => {
  const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
  });
  const [title, setTitle] = useState('Unnamed Set');
  const [cardsRetrieved, setCardsRetrieved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  let tx_id : string;
  try {
    const params = new URLSearchParams(window.location.search);
    tx_id = params.get('tx_id') || '';
  } catch {
    // catch when window undefined (e.g. in server-side rendering)
    tx_id = '';
  }

  setTimeout(async () => {
    if (!cardsRetrieved) {
      console.log("Loading set");
      if (tx_id == '') return;
      // Get terms
      arweave.api.get(tx_id).then(results => {
        setCards(results.data);
        setCardsRetrieved(true);
        setIsLoading(false);
      }).catch(() => {
        console.log("Could not load set");
        setIsLoading(false);
      })
      const tags_query = `{
        transactions(
          first: 1
          ids: ["${tx_id}"]
        ) {
          edges { node { tags { name value } } }
        }
      }`
      arweave.api.post('/graphql', {query: tags_query}).then((results) => {
        const tags = results.data.data.transactions.edges[0].node.tags;
        const title = tags.find((tag : Tag) => tag.name == 'Title').value;
        setTitle(title);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, 0)

  return (
    <div className={styles.container}>
      <Head>
        <title>View Set - 3cards</title>
      </Head>
      <main className={styles.main}>
        <h3>View Set</h3>
        { isLoading ? 
            <div className="lds-dual-ring"></div> : 
            cards.length === 0 ? <p>Set not found</p> : <SetContent cards={cards} title={title} /> }
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

export default Set
