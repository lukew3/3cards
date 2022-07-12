import styles from '../styles/Term.module.css'

const CreateTerm = (props: { 
  id: number, 
  termPair: string[],
  deleteTerm : (id: number) => void
  setDefValue : (id : number, value: string) => void,
  setTermValue : (id : number, value: string) => void,
  incTermPos : (id: number) => void,
  decTermPos : (id: number) => void,
}) => {
  return(
    <div className={styles.term}>
      <div className={styles.term_header}>
        <div>{props.id + 1}</div>
        <div className={styles.term_ops}>
          <div
            onClick={() => props.incTermPos(props.id)}
          >↓</div>
          <div
            onClick={() => props.decTermPos(props.id)}
          >↑</div>
          <div
            onClick={() => props.deleteTerm(props.id)}
          >X</div>
        </div>
      </div>
      <div className={styles.term_input}>
        <input 
          type="text" 
          placeholder="Term" 
          onChange={(e) => props.setTermValue(props.id, e.target.value)}
          value={props.termPair[0]}
        />
        <input 
          type="text"
          placeholder="Definition"
          onChange={(e) => props.setDefValue(props.id, e.target.value)}
          value={props.termPair[1]}
        />
      </div>
    </div>
  )
}

export default CreateTerm;