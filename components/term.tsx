import styles from '../styles/Term.module.css'

const Term = (props: {
  id: number, 
  termPair: string[],
}) => {
  return(
    <div className={styles.term}>
      <div className={styles.term_header}>
        <div>{props.id + 1}</div>
      </div>
      <div className={styles.term_input}>
        <input 
          type="text"
          placeholder="Term"
          value={props.termPair[0]}
          disabled
        />
        <input 
          type="text"
          placeholder="Definition"
          value={props.termPair[1]}
          disabled
        />
      </div>
    </div>
  )
}

export default Term;