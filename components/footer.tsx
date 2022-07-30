import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='https://github.com/lukew3/3cards'>
        <img src="/images/github.svg" className={styles.icon}/>
      </a>
      <a href='https://discord.gg/VbRpZWEaxz'>
        <img src="/images/discord.svg" className={styles.icon}/>
      </a>
    </footer>
  )
}

export default Footer;