import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';

const Nav = () => {
  const [address, setAddress] = useState('');

  const renderMySetsLink = () => {
    if (address !== '') {
      return <Link href={{pathname: '/sets', query: {owner: address}}}><p>My Sets</p></Link>;
    }
  }

  return (
    <nav className={styles.nav_cont}>
      <Link href='/'>
        <h1 className={styles.title_link}>3cards</h1>
      </Link>
      <div className={styles.nav_right}>
        <Link href='/sets'>
          <p>Find Sets</p>
        </Link>
        {renderMySetsLink()}
        <Link href='/create'>
          <p>Create Set</p>
        </Link>
        <NavLogin 
          loggedIn={Boolean(address)}
          setAddress={setAddress}
        />
      </div>
    </nav>
  )
}

const NavLogin = (props: {
  loggedIn: boolean,
  setAddress: (address: string) => void
}) => {

  const connectWallet = async () => {
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

  useEffect(() => {
    setTimeout(() => {
      window.arweaveWallet?.getActiveAddress().then(address => {
        if (address) {
          props.setAddress(address);
        }
      }).catch(() => {
        props.setAddress('');
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