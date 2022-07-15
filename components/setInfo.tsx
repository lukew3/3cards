import Link from 'next/link';
import styles from '../styles/SetInfo.module.css'

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
    return `/set?tx_id=${ props.set.tx_id }`
  }

  const buildAddressLink = () : string => {
    return `/sets?owner=${ props.set.owner_address }`;
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
      <div className={styles.cont}>
        <p className={styles.title}>
          { props.set.title }
        </p>
        <div className={styles.cont_right}>
          <Link href={buildAddressLink()}>
            <p className={styles.short_address}>Created By: { buildShortAddress() }</p>
          </Link>
          <p>Created On: { buildDateString() }</p>
        </div>
      </div>
    </Link>
  )
}
  
export default SetInfo;