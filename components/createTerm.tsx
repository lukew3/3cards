import { useEffect } from 'react';
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

  useEffect(() => {
    console.log('using effect')
    const term_input = document.getElementById(`create-term-${props.id}`);
    if (term_input) {
      console.log('found term input')
      term_input.style.height = "1px";
      term_input.style.height = term_input.scrollHeight + "px";
    }
    const def_input = document.getElementById(`create-def-${props.id}`);
    if (def_input) {
      def_input.style.height = "1px";
      def_input.style.height = def_input.scrollHeight + "px";
    }
  }, [props.termPair]);

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
            id={`create-term-${props.id}`}
            placeholder="Term"
            className={styles.text_area}
            value={props.termPair[0]}
            onChange={e => props.setTermValue(props.id, e.target.value)}
          />
          <p>Term</p>
        </div>
        <div className={styles.term_input_half}>
        <textarea
            id={`create-def-${props.id}`}
            placeholder="Definition"
            className={styles.text_area}
            value={props.termPair[1]}
            onChange={e => props.setDefValue(props.id, e.target.value)}
          />
          <p>Definition</p>
        </div>
      </div>
    </div>
  )
}

export default CreateTerm;