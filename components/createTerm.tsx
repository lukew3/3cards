import styles from '../styles/CreateTerm.module.css';

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
            title="Move term down"
          >↓</div>
          <div
            onClick={() => props.decTermPos(props.id)}
            title="Move term up"
          >↑</div>
          <div
            onClick={() => props.deleteTerm(props.id)}
            title="Delete term"
          >X</div>
        </div>
      </div>
      <div className={styles.term_input}>
        <div className={styles.term_input_half}>
          <textarea
            placeholder="Term"
            className={styles.text_area}
            value={props.termPair[0]}
            onChange={(e) => {
              props.setTermValue(props.id, e.target.value);
              e.target.style.height = "1px";
              e.target.style.height = (e.target.scrollHeight) + "px";
            }}
          />
          <p>Term</p>
        </div>
        <div className={styles.term_input_half}>
        <textarea
            placeholder="Definition"
            className={styles.text_area}
            value={props.termPair[1]}
            onChange={(e) => {
              props.setDefValue(props.id, e.target.value);
              e.target.style.height = "1px";
              e.target.style.height = (e.target.scrollHeight) + "px";
            }}
          />
          <p>Definition</p>
        </div>
      </div>
    </div>
  )
}

export default CreateTerm;