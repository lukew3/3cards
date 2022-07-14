import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Term from '../components/term';
import styles from '../styles/Create.module.css'

interface SetData {
  tx_id: string,
  owner_address: string,
  timestamp: string,
}

const SetInfo = (props: {
  id: number,
  set: SetData
}) => {
  return(
    <div>
      { props.set.tx_id }
    </div>
  )
}

const Set: NextPage = () => {
  const arweave = Arweave.init({});
  const [setsRetrieved, setSetsRetrieved] = useState(false);
  const [sets, setSets] = useState<SetData[]>([])
  const router = useRouter();
  const tx_id : string = router.query.tx_id?.toString() || '';

  const fetchSets = async () => {
    let user_address = await window.arweaveWallet.getActiveAddress().catch(err => {
      console.log('address not found');
      return;
    });
    const query_string = `{
      transactions(
        first: 10,
        owners: ["${user_address}"],
        tags: [
          {
            name: "Content-Type",
            values: ["application/json"]
          },
          {
            name: "App-Name",
            values: ["3cards"]
          }
        ]
      ) {
        edges {
          node {
            id
            owner {
              address
            }
            block {
              timestamp
            }
          }
        }
      }
    }`
    arweave.api.post('/graphql', {query: query_string}).then((results) => {
      let newSets : SetData[] = [];
      results.data.data.transactions.edges.forEach((edge : any) => {
        newSets.push({
          tx_id: edge.node.id,
          timestamp: edge.node.block.timestamp,
          owner_address: edge.node.owner.address
        })
      })
      setSets(newSets);
      console.log(newSets);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      if (!setsRetrieved) {
        setSetsRetrieved(true);
        console.log("Loading sets");
        fetchSets();
      }
    }, 1);
  })

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
            sets.map((set, index) => {
              return(
                <SetInfo
                  key={index}
                  id={index}
                  set={set}
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
