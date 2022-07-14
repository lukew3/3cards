import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Nav from '../components/nav';
import Term from '../components/term';
import styles from '../styles/Create.module.css'

const Set: NextPage = () => {
  const arweave = Arweave.init({});
  const [title, setTitle] = useState('My Set');
  const [termsRetrieved, setTermsRetrieved] = useState(false);
  const [terms, setTerms] = useState([['', ''], ['', ''], ['', '']]);
  const router = useRouter();
  const tx_id : string = router.query.tx_id?.toString() || '';

  setTimeout(() => {
    if (!termsRetrieved) {
      console.log("Loading terms");
      if (tx_id == '') return;
      arweave.transactions.get(tx_id).then((tx) => {
        // TODO: Ensure data is valid list of pairs first
        setTermsRetrieved(true);
        setTerms(JSON.parse(tx.get('data', {decode: true, string: true})));
        tx['tags'].forEach((tag : any) => {
          console.log(tag);
          let key = tag.get('name', {decode: true, string: true});
          if (key == 'Title') {
            setTitle(tag.get('value', {decode: true, string: true}));
          }
        })
      }).catch(err => {
        console.log(err);
      })
    }
  }, 0)

  return (
    <div className={styles.container}>
      <Head>
        <title>View Set - 3cards</title>
        <meta name="description" content="Create a flash card set with 3cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <h3>View Set</h3>
        <h4>{ title }</h4>
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
