import { useEffect } from 'react';
import styles from '../../styles/create/Card.module.css';

const CreateCard = (props: { 
  id: number, 
  card: string[],
  deleteCard : (id: number) => void
  setDefValue : (id : number, value: string) => void,
  setTermValue : (id : number, value: string) => void,
  incCardPos : (id: number) => void,
  decCardPos : (id: number) => void,
}) => {
  const updateInputSizing = () => {
    const term_input = document.getElementById(`create-term-${props.id}`);
    if (term_input) {
      term_input.style.height = "1px";
      term_input.style.height = term_input.scrollHeight + "px";
    }
    const def_input = document.getElementById(`create-def-${props.id}`);
    if (def_input) {
      def_input.style.height = "1px";
      def_input.style.height = def_input.scrollHeight + "px";
    }
  }

  // update input sizing on termPair change
  useEffect(updateInputSizing, [props.card]);

  // update input sizing on window resize
  useEffect(() => {
    window.addEventListener('resize', updateInputSizing);
    // cleanup this component
    return () => {
      window.removeEventListener('resize', updateInputSizing);
    };
  }, []);
  
  return(
    <div className={styles.term}>
      <div className={styles.term_header}>
        <div>{props.id + 1}</div>
        <div className={styles.term_ops}>
          <div
            onClick={() => props.incCardPos(props.id)}
            title="Move term down"
          >↓</div>
          <div
            onClick={() => props.decCardPos(props.id)}
            title="Move term up"
          >↑</div>
          <div
            onClick={() => props.deleteCard(props.id)}
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
            value={props.card[0]}
            onChange={e => {props.setTermValue(props.id, e.target.value); updateInputSizing()}}
          />
          <p>Term</p>
        </div>
        <div className={styles.term_input_half}>
        <textarea
            id={`create-def-${props.id}`}
            placeholder="Definition"
            className={styles.text_area}
            value={props.card[1]}
            onChange={e => {props.setDefValue(props.id, e.target.value); updateInputSizing()}}
          />
          <p>Definition</p>
        </div>
      </div>
    </div>
  )
}

export default CreateCard;