import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Term from '../components/term';
import styles from '../styles/Set.module.css'

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
  const [termsRetrieved, setTermsRetrieved] = useState(false);
  const [terms, setTerms] = useState([['', ''], ['', ''], ['', '']]);
  const router = useRouter();
  const tx_id : string = router.query.tx_id?.toString() || '';

  setTimeout(async () => {
    if (!termsRetrieved) {
      console.log("Loading terms");
      if (tx_id == '') return;
      // Get terms
      arweave.api.get(tx_id).then(results => {
        setTerms(results.data);
        setTermsRetrieved(true);
      }).catch(() => {
        console.log("Could not load terms");
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
        <meta name="description" content="Create a flash card set with 3cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>View Set</h3>
        <h4
          className={styles.title}
        >{ title }</h4>
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
