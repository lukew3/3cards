import Link from 'next/link';
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        <h1 className={styles.title_link}>3cards</h1>
      </Link>
    </nav>
  )
}

export default Nav;