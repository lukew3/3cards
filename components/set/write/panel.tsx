import styles from '../../../styles/set/write/Panel.module.css'

const WritePanel = (props: {
  termPair: string[],
}) => {
  return(
    <div className={styles.writePanel}>
        <div className={styles.definition}>{props.termPair[1]}</div>
        <div className={styles.input}>
          <input type="text" placeholder='Type the Term'/>
        </div>
    </div>
  )
}

export default WritePanel;