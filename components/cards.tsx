import styles from '../styles/Cards.module.css'
import { useEffect, useState } from 'react';

const Cards = (props: {
  terms: string[][],
}) => {
  const termsLen = props.terms.length;
  const [termId, setTermId] = useState(0);
  const [showingTerm, setShowingTerm] = useState(true);  

  return (
    <div className={styles.cards}>
      <div
        className={styles.card}
        onClick={() => setShowingTerm(!showingTerm)}
      >
        {showingTerm ? props.terms[termId][0] : props.terms[termId][1]}
      </div>
      <div className={styles.controls}>
        <button onClick={() => {if (termId - 1 >= 0) setTermId(termId - 1)}}>&lt;</button>
        <p>{termId + 1}/{termsLen}</p>
        <button onClick={() => {if (termId + 1 < termsLen) setTermId(termId + 1)}}>&gt;</button>
      </div>
    </div>
  )
}

export default Cards;