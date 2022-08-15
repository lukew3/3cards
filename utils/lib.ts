import Arweave from 'arweave';
import { Tag, Set } from '../types/types';

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

export async function loadSet(tx_id : string) {
  console.log("Loading set");
  let set = {
    title: '',
    cards: [],
  }
  if (tx_id == '') return set;
  // Get cards
  await arweave.api.get(tx_id).then(results => {
    if (results.data === "Request type not found.") return set;
    set.cards = results.data;
  }).catch(() => {
    console.log("Could not load set");
    return set;
  });
  // Get title
  const tags_query = `{
    transactions(
      first: 1
      ids: ["${tx_id}"]
    ) {
      edges { node { tags { name value } } }
    }
  }`
  await arweave.api.post('/graphql', {query: tags_query}).then((results) => {
    const tags = results.data.data.transactions.edges[0].node.tags;
    set.title = tags.find((tag : Tag) => tag.name == 'Title').value;
  }).catch((err) => {
    console.log(err);
    return set;
  })
  return set;
}

export function rootPath() : string {
    try {
        return (location.pathname.split('/').length > 2) ? '/' + location.pathname.split('/')[1] : '';
    } catch (e) {
        return '';
    }
}