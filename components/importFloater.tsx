import { useEffect, useState } from 'react';
import styles from '../styles/ImportFloater.module.css'

const ImportFloater = (props: {
    closeImport: () => void,
    setTerms: (terms : string[][]) => void,
}) => {
    const [cardCount, setCardCount] = useState(0);
    const [newTerms, setNewTerms] = useState([['', '']]);
    const [importContent, setImportContent] = useState('');
    const [termSeperator, setTermSeperator] = useState('\t');
    const [cardSeperator, setCardSeperator] = useState('\n');

    useEffect(() => {
        // Update newTerms and cardCount when variables change
        let terms : string[] = importContent.split(cardSeperator || '\n');
        let terms2 : string[][] = [];
        terms.forEach(term => {
            terms2.push(term.split(termSeperator || '\t'));
        })
        setNewTerms(terms2);
        setCardCount(terms2.length);
    }, [importContent, termSeperator, cardSeperator])

    const importSet = () => {
        props.setTerms(newTerms);
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