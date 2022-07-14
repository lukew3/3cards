import Link from 'next/link';
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='https://github.com/lukew3/3cards'>
        <img className={styles.icon} src="/githubIcon.svg" alt="Github" />
      </Link>
    </footer>
  )
}

export default Footer;