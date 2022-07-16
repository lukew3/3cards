import { useEffect, useState } from 'react';
import { ArweaveWebWallet } from 'arweave-wallet-connector';
import Arweave from 'arweave';
import styles from '../styles/Nav.module.css'
import { SocketAddress } from 'net';


const NavLogin = (props: {
  loggedIn: boolean,
  setAddress: (address: string) => void
}) => {
  const arweave = Arweave.init({});
  const webWallet = new ArweaveWebWallet({
    name: '3cards',
    logo: 'https://user-images.githubusercontent.com/47042841/179059165-24a274d4-9262-4709-a702-22df7101ea93.svg'
  }, 'arweave.app')
  webWallet.on('connect', (address) => {
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
        webWallet.connect();
        console.log('made it here');
    }
  }

  const connectWalletArconnect = async () => {
    if (props.loggedIn) {
      window.arweaveWallet?.disconnect();
      props.setAddress('');
    } else {
      if (window.arweaveWallet == undefined) {
        alert('Arconnect not installed. Go to https://arconnnect.io to get started.');
      } else {
        await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
        window.arweaveWallet.getActiveAddress().then((address) => {
          props.setAddress(address);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }

  /*
  useEffect(() => {
    setTimeout(async () => {
      // Set initial login state
      // Currently doesn't work since login isn't saved between sessions, right?
      if (window.arweaveWallet == undefined) return;
      const address = await window.arweaveWallet.getActiveAddress();
      if (address) {
        props.setAddress(address);
      } else {
        props.setAddress('');
      }
    }, 0);
  })
  */

  return(
    <div
      className={styles.login_text}
      onClick={connectWallet}
    >
      {props.loggedIn ? 'Logout' : 'Login'}
    </div>
  )
}

export default NavLogin;