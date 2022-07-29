import { useEffect, useState } from 'react';
import styles from '../styles/ConnectFloater.module.css'

const ConnectFloater = (props: {
    closeFloater: () => void,
    connect: () => void,
}) => {
    return (
        <div className={styles.background}>
            <div className={styles.floater}>
                <div 
                    className={styles.close_button}
                    onClick={props.closeFloater}
                >X</div>
                <h3>Connect to Arweave</h3>
                <p>To use 3cards, you will need an arweave wallet. The connection will be handled by arweave.app. 
                    If you already have an account, you can login with arweave.app by pressing dropping your private key or simply connecting if you are already signed in.
                    Otherwise, follow the sign up process at arweave.app and connect when you are done.
                </p>
                <div
                    className={styles.connect_button}
                    onClick={props.connect}
                >
                    Connect at arweave.app
                </div>
            </div>
        </div>
    )
}

export default ConnectFloater;