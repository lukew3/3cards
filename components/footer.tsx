import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/lukew3/3cards'>
        <img className={styles.icon} src="/githubIcon.svg" alt="Github" />
      </a>
    </footer>
  )
}

export default Footer;