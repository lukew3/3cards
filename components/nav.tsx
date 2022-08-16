import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NavLogin = dynamic(() => import('./navLogin'), {
  ssr: false,
})

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className={`${styles.nav_cont} container`}>
      <Link href={`/`}>
        <a><h1 className={styles.title_link}>3cards</h1></a>
      </Link>
      <div className={styles.nav_right}>
        <Link href={`/sets`}>
          <a>
            <img src="/images/search.svg" className={styles.nav_svg}/>
            <label className={styles.nav_label}>Find Sets</label>
          </a>
        </Link>
        <Link href={`/create`}>
          <a>
            <img src="/images/plus.svg" className={styles.nav_svg}/>
            <label className={styles.nav_label}>Create Set</label>
          </a>
        </Link>
        <NavLogin
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </nav>
  )
}

export default Nav;