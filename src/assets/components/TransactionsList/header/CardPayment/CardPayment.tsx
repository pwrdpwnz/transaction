import React from 'react';
import styles from './CardPayment.module.scss';

const CardPayment: React.FC = () => {
    return (
        <div className={styles.cardPayment}>
            <div className={styles.container}>
                <p>No Payment Due</p>
                <p>You've paid your September balance</p>
            </div>
            <div className={styles.checkmark}>
                <span>&#10003;</span>
            </div>
        </div>
    );
}

export default CardPayment;
