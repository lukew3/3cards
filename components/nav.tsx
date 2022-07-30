import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import rootPath from '../utils/rootPath';

const NavLogin = dynamic(() => import('./navLogin'), {
  ssr: false,
})

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className={styles.nav_cont}>
      <Link href={`${rootPath()}/`}>
        <a><h1 className={styles.title_link}>3cards</h1></a>
      </Link>
      <div className={styles.nav_right}>
        <Link href={`${rootPath()}/sets`}>
          <a>
            <img src="/images/search.svg" className={styles.nav_svg}/>
            Find Sets
          </a>
        </Link>
        <Link href={`${rootPath()}/create`}>
          <a>
            <img src="/images/plus.svg" className={styles.nav_svg}/>
            Create Set
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