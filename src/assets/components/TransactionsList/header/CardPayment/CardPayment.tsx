import React from 'react';
import styles from './CardPayment.module.scss';

const CardPayment: React.FC = () => {
    return (
        <div className={`card ${styles.cardPayment}`}>
            <div className={styles.container}>
                <p>No Payment Due</p>
                <p>You’ve paid your June balance</p>
            </div>
            <div className={styles.checkmark}>
                <span>&#10003;</span>
            </div>
        </div>
    );
}

export default CardPayment;
