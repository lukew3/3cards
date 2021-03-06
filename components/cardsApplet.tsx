import styles from '../styles/CardsApplet.module.css'
import { useEffect, useState } from 'react';

const Cards = (props: {
  cards: string[][],
}) => {
  const setLen = props.cards.length;
  const [termId, setTermId] = useState(0);
  const [showingTerm, setShowingTerm] = useState(true);

  const scrollToTerm = (termIndex : number) => {
    const cards_list_item = document.getElementById('Cards_cards_list');
    if (cards_list_item) {
      const scrollDist = cards_list_item.scrollWidth / setLen;
      cards_list_item.scrollTo(termIndex * scrollDist, 0);
    }
  }

  const showPrev = () => {
    if (termId - 1 >= 0) {
      scrollToTerm(termId-1);
      setTermId(termId - 1);
    }
    setShowingTerm(true);
  }

  const showNext = () => {
    if (termId + 1 < setLen) {
      scrollToTerm(termId+1);
      setTermId(termId + 1);
    }
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

  const handleCardsListScroll = (e : any) => {
    const scrollDist = e.target.scrollWidth / setLen;
    const nextTermId = Math.ceil(e.target.scrollLeft / scrollDist);
    setTermId(nextTermId);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [termId, showingTerm]);

  useEffect(() => {
    const cards_list_item = document.getElementById('Cards_cards_list');
    if (cards_list_item) {
      handleCardsListScroll({ target: cards_list_item}); // Set term on initial load
      window.addEventListener('keydown', handleKeyDown);
      cards_list_item.addEventListener('scroll', handleCardsListScroll);
      return () => {
        cards_list_item.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, []);

  return (
    <div className={styles.cards}>
      <input type="checkbox" className={styles.show_term_checkbox} checked={!showingTerm} onChange={toggleShowingTerm} />
      <div id="Cards_cards_list" className={styles.cards_list}>
        {
          props.cards.map((card, index) => {
            return(
              <div
                className={styles.card}
                key={`cards-card-${index}`}
                onClick={toggleShowingTerm}
              >
                <div className={styles.card_front}>
                  {card[0]}
                </div>
                <div className={styles.card_back}>
                  {card[1]}
                </div>
              </div>
            );
          })
        }
      </div>
      <div className={styles.controls}>
        <button onClick={showPrev}>&lt;</button>
        <p>{termId + 1}/{setLen}</p>
        <button onClick={showNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Cards;