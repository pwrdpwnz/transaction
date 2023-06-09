import React from 'react';
import styles from './CardPayment.module.scss';

const CardPayment: React.FC = () => {
    return (
        <div className={`card ${styles.cardPayment}`}>
            <div className={styles.container}>
                <p>Нет платежа</p>
                <p>Вы выплатили ваш баланс за июнь</p>
            </div>
            <div className={styles.checkmark}>
                <span>&#10003;</span> {/* Знак галочки */}
            </div>
        </div>
    );
}

export default CardPayment;
