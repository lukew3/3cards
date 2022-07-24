import { useEffect, useState } from 'react';
import styles from '../styles/ImportFloater.module.css'

const ImportFloater = (props: {
    closeImport: () => void,
    setCards: (cards : string[][]) => void,
}) => {
    const [cardCount, setCardCount] = useState(0);
    const [newCards, setNewCards] = useState([['', '']]);
    const [importContent, setImportContent] = useState('');
    const [termSeperator, setTermSeperator] = useState('\t');
    const [cardSeperator, setCardSeperator] = useState('\n');

    useEffect(() => {
        // Update newTerms and cardCount when variables change
        let cards : string[] = importContent.split(cardSeperator || '\n');
        let cards2 : string[][] = [];
        cards.forEach(card => {
            cards2.push(card.split(termSeperator || '\t'));
        })
        setNewCards(cards2);
        setCardCount(cards2.length);
    }, [importContent, termSeperator, cardSeperator])

    const importSet = () => {
        props.setCards(newCards);
        props.closeImport();
    }

    return (
        <div className={styles.background}>
            <div className={styles.floater}>
                <div 
                    className={styles.close_button}
                    onClick={props.closeImport}
                >X</div>
                <h3>Import</h3>
                <textarea
                    className={styles.text_area}
                    placeholder="Paste input here..."
                    onChange={e => setImportContent(e.target.value)}
                >
                </textarea>
                <div
                    className={styles.seperators_group}
                >
                    <div className={styles.seperators_item}>
                        <label>Term and Definition Seperator:</label>
                        <br></br>
                        <input
                            type="text"
                            placeholder="\t"
                            className={styles.seperator_input}
                            onChange={e => setTermSeperator(e.target.value)}
                        />
                    </div>
                    <div className={styles.seperators_item}>
                        <label>Cards Seperator:</label>
                        <br></br>
                        <input
                            type="text"
                            placeholder="\n"
                            className={styles.seperator_input}
                            onChange={e => setCardSeperator(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.bottom_group}>
                    <label>{cardCount} cards</label>
                    <div
                        className={styles.import_button}
                        onClick={importSet}
                    >Import</div>
                </div>
            </div>
        </div>
    )
}

export default ImportFloater;