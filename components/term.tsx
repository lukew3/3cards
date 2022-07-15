import styles from '../styles/Term.module.css'

const Term = (props: {
  id: number, 
  termPair: string[],
}) => {
  return(
    <div className={styles.term}>
      <p>{props.termPair[0]}</p>
      <div className={styles.term_div}></div>
      <p
        className={styles.term_definition}
      >{props.termPair[1]}</p>
    </div>
  )
}

export default Term;