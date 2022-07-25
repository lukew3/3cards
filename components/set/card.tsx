import styles from '../../styles/set/Card.module.css'

const SetCard = (props: {
  id: number, 
  card: string[],
}) => {
  return(
    <div className={styles.term}>
      <p>{props.card[0]}</p>
      <div className={styles.term_div}></div>
      <p
        className={styles.term_definition}
      >{props.card[1]}</p>
    </div>
  )
}

export default SetCard;