import type { NextPage } from 'next'
import Head from 'next/head'
import Arweave from 'arweave';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SetInfo from '../components/setInfo';
import styles from '../styles/Sets.module.css';
import rootPath from '../utils/rootPath';

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
  const [sets, setSets] = useState<SetData[]>([])

  const fetchSets = async () => {
    const per_page = 10;
    let owners_string = router.query.owner ? `owners: ["${router.query.owner}"]` : '';
    let after_string = router.query.after ? `after: "${router.query.after}"` : '';
    const query_string = `{
      transactions(
        first: ${per_page}
        ${after_string}
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

  const buildNextUrl = () => {
    const after = sets.length > 0 ? sets[sets.length - 1].tx_id : '';
    const owner = router.query.owner;
    if (owner && after) {
      return `/sets?after=${after}?owner=${owner}`;
    } else if (owner) {
      return `/sets?owner=${owner}`;
    } else if (after) {
      return `/sets?after=${after}`;
    } else {
      return '/sets';
    }
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("Loading sets");
      fetchSets();
    }, 0);
  }, [router.asPath])

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
        <div className={styles.page_control}>
          <p>&lt;</p>
          <Link href={`${rootPath()}${buildNextUrl()}`}>
            <p>&gt;</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Set
