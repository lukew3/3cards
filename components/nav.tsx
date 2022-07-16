import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const NavLogin = dynamic(() => import('./navLogin'), {
  ssr: false,
})

const Nav = () => {
  const [address, setAddress] = useState('');

  const renderMySetsLink = () => {
    if (address !== '') {
      return <Link href={{pathname: '/sets', query: {owner: address}}}><a>My Sets</a></Link>;
    }
  }

  return (
    <nav className={styles.nav_cont}>
      <Link href='/'>
        <a><h1 className={styles.title_link}>3cards</h1></a>
      </Link>
      <div className={styles.nav_right}>
        <Link href='/sets'>
          <a>Find Sets</a>
        </Link>
        {renderMySetsLink()}
        <Link href='/create'>
          <a>Create Set</a>
        </Link>
        <NavLogin
          loggedIn={Boolean(address)}
          setAddress={setAddress}
        />
      </div>
    </nav>
  )
}

export default Nav;