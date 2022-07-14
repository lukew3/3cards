import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <nav className={styles.nav_cont}>
      <Link href='/'>
        <h1 className={styles.title_link}>3cards</h1>
      </Link>
      <NavLogin />
    </nav>
  )
}

const NavLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const connectWallet = async () => {
    if (loggedIn) {
      window.arweaveWallet?.disconnect();
      setLoggedIn(false);
    } else {
      if (window.arweaveWallet == undefined) {
        alert('Arconnect not installed. Go to https://arconnnect.io to get started.');
      } else {
        await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
        window.arweaveWallet.getActiveAddress().then(address => {
          setLoggedIn(true);
          console.log(address);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.arweaveWallet?.getActiveAddress().then(address => {
        if (address) {
          setLoggedIn(true);
        }
      }).catch(() => {
        setLoggedIn(false);
      })
    }, 0);
  })

  return(
    <div
      className={styles.login_text}
      onClick={connectWallet}
    >
      {loggedIn ? 'Logout' : 'Login with ArConnect'}
    </div>
  )
}

export default Nav;