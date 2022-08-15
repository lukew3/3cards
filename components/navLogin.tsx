import { useEffect, useState } from 'react';
import { ArweaveWebWallet } from 'arweave-wallet-connector';
import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import ConnectFloater from './connectFloater';
import { rootPath } from '../utils/lib';


const NavLogin = (props: {
  loggedIn: boolean,
  setLoggedIn: (loggedIn: boolean) => void,
}) => {
  const [showingFloater, setShowingFloater] = useState(false);
  const [webWallet, setWebWallet] = useState<any>();
  const [address, setAddress] = useState('');

  useEffect(() => {
    const newWebWallet = new ArweaveWebWallet({
      name: '3cards',
      logo: 'https://user-images.githubusercontent.com/47042841/179059165-24a274d4-9262-4709-a702-22df7101ea93.svg'
    }, 'arweave.app')
    newWebWallet.on('connect', (address: string) => {
      setShowingFloater(false);
      setAddress(address);
      props.setLoggedIn(true);
      window.localStorage.setItem('hasLoggedIn', 'true');
      console.log('connected at address: ' + address);
    })
    newWebWallet.on('disconnect', () => {
      setAddress('');
      props.setLoggedIn(false);
      console.log('disconnected');
    });
    setWebWallet(newWebWallet);
  }, [])

  const connectWallet = async () => {
    // Connect with arweave.app
    if (props.loggedIn) {
      webWallet.disconnect();
    } else if (window.localStorage.getItem('hasLoggedIn')) {
      webWallet.connect();
    } else {
      // Display connect floater
      setShowingFloater(true);
    }
  }

  return (
    <div className={styles.login_group}>
      <div
        className={styles.login_text}
      >
        {props.loggedIn ?
          <Link href={{ pathname: `${rootPath()}/sets`, query: { owner: address } }}>
            <a>
              <img src="/images/user.svg" className={styles.nav_svg} />
              <label className={styles.nav_label}>My Sets</label>
            </a>
          </Link> :
          <a onClick={connectWallet}>
            <img src="/images/signin.svg" className={styles.nav_svg} />
            <label className={styles.nav_label}>Login</label>
          </a>}
      </div>
      {showingFloater ?
        <ConnectFloater
          closeFloater={() => setShowingFloater(false)}
          connect={() => { webWallet.connect() }}
        /> : null}
    </div>

  )
}

export default NavLogin;