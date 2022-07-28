import { useEffect, useState } from 'react';
import { ArweaveWebWallet } from 'arweave-wallet-connector';
import styles from '../styles/Nav.module.css'
import ConnectFloater from './connectFloater';


const NavLogin = (props: {
  loggedIn: boolean,
  setAddress: (address: string) => void
}) => {
  const [showingFloater, setShowingFloater] = useState(false);

  const webWallet = new ArweaveWebWallet({
    name: '3cards',
    logo: 'https://user-images.githubusercontent.com/47042841/179059165-24a274d4-9262-4709-a702-22df7101ea93.svg'
  }, 'arweave.app')
  webWallet.on('connect', (address : string) => {
    props.setAddress(address);
    console.log('connected at address: ' + address);
  })
  webWallet.on('disconnect', () => {
    props.setAddress('');
    console.log('disconnected');
  })

  const connectWallet = async () => {
    // Connect with arweave.app
    if (props.loggedIn) {
      webWallet.disconnect();
    } else {
      if (window.localStorage.getItem('hasLoggedIn')) {
        webWallet.connect();
      } else {
        // Display connect floater
        setShowingFloater(true);
      }
    }
  }

  return(
    <div className={styles.login_group}>
      <div
        className={styles.login_text}
        onClick={connectWallet}
      >
        {props.loggedIn ? 'Logout' : 'Login'}
      </div>
      {showingFloater ?
        <ConnectFloater
          closeFloater={() => setShowingFloater(false)}
        /> : null}
    </div>
    
  )
}

export default NavLogin;