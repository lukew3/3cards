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
      window.arweaveWallet.disconnect();
    } else {
      await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
      let address = await window.arweaveWallet.getActiveAddress();
      console.log(address);
    }
    setLoggedIn(!loggedIn);
  }

  useEffect(() => {
    setTimeout(() => {
      window.arweaveWallet.getActiveAddress().then(address => {
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
      {loggedIn ? 'Logout' : 'Login'}
    </div>
  )
}

export default Nav;