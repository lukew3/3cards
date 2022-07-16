import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import SetInfo from '../components/setInfo';
import styles from '../styles/Create.module.css';

interface SetData {
  tx_id: string,
  owner_address: string,
  timestamp: number,
  title: string,
}

const Set: NextPage = () => {
  const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
  });
  const router = useRouter();
  const [setsRetrieved, setSetsRetrieved] = useState(false);
  const [sets, setSets] = useState<SetData[]>([])

  const fetchSets = async () => {
    let owners_string = router.query.owner ? `owners: ["${router.query.owner}"]` : '';
    const query_string = `{
      transactions(
        first: 10
        ${owners_string}
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
            tags {
              name
              value
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
          timestamp: edge.node.block?.timestamp || 0,
          owner_address: edge.node.owner.address,
          title: edge.node.tags.find((tag : { name : string, value : string}) => tag.name === 'Title')?.value || 'Unnamed Set',
        })
      })
      setSets(newSets);
      console.log(newSets);
    }).catch(err => {
      setSets([]);
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
        <title>Find Sets - 3cards</title>
        <meta name="description" content="Create a flash card set with 3cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Find Sets</h3>
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
