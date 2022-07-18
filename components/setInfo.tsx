import Link from 'next/link';
import styles from '../styles/SetInfo.module.css'
import rootPath from '../utils/rootPath';

interface SetData {
  tx_id: string,
  owner_address: string,
  timestamp: number,
  title: string,
}

const SetInfo = (props: {
  id: number,
  set: SetData
}) => {
  const buildSetLink = () : string => {
    return `${rootPath()}/set.html?tx_id=${ props.set.tx_id }`
  }

  const buildAddressLink = () : string => {
    return `${rootPath()}/sets.html?owner=${ props.set.owner_address }`;
  }

  const buildShortAddress = () : string => {
    const a = props.set.owner_address;
    return a.substring(0, 5) + '..' + a.substring(a.length - 4)
  }

  const buildDateString = () : string => {
    const date = new Date(props.set.timestamp * 1000);
    return date.toLocaleString();
  }
  
  return(
    <Link href={buildSetLink()}>
      <a>
        <div className={styles.cont}>
          <p className={styles.title}>
            { props.set.title }
          </p>
          <div className={styles.cont_right}>
            <Link href={buildAddressLink()}>
              <a className={styles.short_address}><p>Created By: { buildShortAddress() }</p></a>
            </Link>
            <p>Created On: { buildDateString() }</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SetInfo;