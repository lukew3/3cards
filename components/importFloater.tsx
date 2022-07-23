import styles from '../styles/ImportFloater.module.css'

const ImportFloater = (props: {
    closeImport: () => void
}) => {
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
                    placeholder="Input">
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
                        />
                    </div>
                    <div className={styles.seperators_item}>
                        <label>Cards Seperator:</label>
                        <br></br>
                        <input
                            type="text"
                            placeholder="\n"
                            className={styles.seperator_input}
                        />
                    </div>
                </div>
                <div
                    className={styles.import_button}
                    onClick={props.closeImport}
                >Import</div>
            </div>
        </div>
    )
}

export default ImportFloater;