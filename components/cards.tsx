import styles from '../styles/Cards.module.css'
import { useEffect, useState } from 'react';

const Cards = (props: {
  terms: string[][],
}) => {
  const termsLen = props.terms.length;
  const [termId, setTermId] = useState(0);
  const [showingTerm, setShowingTerm] = useState(true);

  const showPrev = () => {
    if (termId - 1 >= 0) setTermId(termId - 1);
    setShowingTerm(true);
  }

  const showNext = () => {
    if (termId + 1 < termsLen) setTermId(termId + 1);
    setShowingTerm(true);
  }
  
  const toggleShowingTerm = () => {
    setShowingTerm(!showingTerm);
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'ArrowUp') toggleShowingTerm();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [termId, showingTerm]);

  return (
    <div className={styles.cards}>
      <div
        className={styles.card}
        onClick={toggleShowingTerm}
      >
        {showingTerm ? props.terms[termId][0] : props.terms[termId][1]}
      </div>
      <div className={styles.controls}>
        <button onClick={showPrev}>&lt;</button>
        <p>{termId + 1}/{termsLen}</p>
        <button onClick={showNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Cards;