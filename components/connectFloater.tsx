import { useEffect, useState } from 'react';
import styles from '../styles/ConnectFloater.module.css'

const ConnectFloater = (props: {
    closeFloater: () => void,
}) => {
    return (
        <div className={styles.background}>
            <div className={styles.floater}>
                <div 
                    className={styles.close_button}
                    onClick={props.closeFloater}
                >X</div>
                <h3>Connect to Arweave</h3>
                <p>This is how you login to arweave.</p>
            </div>
        </div>
    )
}

export default ConnectFloater;