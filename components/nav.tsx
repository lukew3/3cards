import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const renderMySets = () => {
    if (loggedIn) return <Link href='/mysets'><p>My Sets</p></Link>;
  }

  return (
    <nav className={styles.nav_cont}>
      <Link href='/'>
        <h1 className={styles.title_link}>3cards</h1>
      </Link>
      <div className={styles.nav_right}>
        {renderMySets()}
        <Link href='/create'>
          <p>Create Set</p>
        </Link>
        <NavLogin 
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </nav>
  )
}

const NavLogin = (props: {
  loggedIn: boolean,
  setLoggedIn: (loggedIn: boolean) => void
}) => {

  const connectWallet = async () => {
    if (props.loggedIn) {
      window.arweaveWallet?.disconnect();
      props.setLoggedIn(false);
    } else {
      if (window.arweaveWallet == undefined) {
        alert('Arconnect not installed. Go to https://arconnnect.io to get started.');
      } else {
        await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
        window.arweaveWallet.getActiveAddress().then(address => {
          props.setLoggedIn(true);
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
          props.setLoggedIn(true);
        }
      }).catch(() => {
        props.setLoggedIn(false);
      })
    }, 0);
  })

  return(
    <div
      className={styles.login_text}
      onClick={connectWallet}
    >
      {props.loggedIn ? 'Logout' : 'Login'}
    </div>
  )
}

export default Nav;