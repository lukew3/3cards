import { useEffect, useState } from 'react';
import { ArweaveWebWallet } from 'arweave-wallet-connector';
import styles from '../styles/Nav.module.css'
import ConnectFloater from './connectFloater';


const NavLogin = (props: {
  loggedIn: boolean,
  setAddress: (address: string) => void
}) => {
  const [showingFloater, setShowingFloater] = useState(false);
  const [webWallet, setWebWallet] = useState<any>();

  useEffect(() => {
    const newWebWallet = new ArweaveWebWallet({
      name: '3cards',
      logo: 'https://user-images.githubusercontent.com/47042841/179059165-24a274d4-9262-4709-a702-22df7101ea93.svg'
    }, 'arweave.app')
    newWebWallet.on('connect', (address : string) => {
      setShowingFloater(false);
      props.setAddress(address);
      window.localStorage.setItem('hasLoggedIn', 'true');
      console.log('connected at address: ' + address);
    })
    newWebWallet.on('disconnect', () => {
      props.setAddress('');
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

  return(
    <div className={styles.login_group}>
      <div
        className={styles.login_text}
        onClick={connectWallet}
      >
        {props.loggedIn ?
          <div>
            <img src="/images/signout.svg" className={styles.nav_svg} />
            <label>Logout</label>
          </div> : 
          <div>
            <img src="/images/signin.svg" className={styles.nav_svg} />
            <label>Login</label>
          </div>}
      </div>
      {showingFloater ?
        <ConnectFloater
          closeFloater={() => setShowingFloater(false)}
          connect={() => {webWallet.connect()}}
        /> : null}
    </div>
    
  )
}

export default NavLogin;