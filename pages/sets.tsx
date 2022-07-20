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
  const [sets, setSets] = useState<SetData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
      console.log(newSets);
    }).catch(err => {
      setSets([]);
      setIsLoading(false);
      console.log(err);
    })
  }

  const buildNextUrl = () => {
    let params : any = {}
    if (sets.length > 0) params.after = sets[sets.length - 1].tx_id;
    if (router.query.owner) params.owner = router.query.owner;
    const query_params = new URLSearchParams(params);
    return query_params.toString() ? `?${query_params.toString()}` : '';
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
        { isLoading ? <div className="lds-dual-ring"></div> : <div></div> }
        { !isLoading && sets.length === 0 ? <div>No sets found</div> : <div></div> }
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
