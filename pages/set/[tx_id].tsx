import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Nav from '../../components/nav';
import Term from '../../components/term';
import styles from '../../styles/Create.module.css'

const Set: NextPage = () => {
  const arweave = Arweave.init({});
  const [termsRetrieved, setTermsRetrieved] = useState(false);
  const [terms, setTerms] = useState([['', ''], ['', ''], ['', '']]);
  const router = useRouter();
  const tx_id : string = router.query.tx_id?.toString() || '';

  setTimeout(() => {
    if (!termsRetrieved) {
      console.log("Loading terms");
      if (tx_id == '') return;
      arweave.transactions.getData(tx_id, {decode: true, string: true}).then(data => {
        console.log(data);
        setTermsRetrieved(true);
        setTerms(JSON.parse(data.toString()));
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
