import React from 'react';
import styles from './CardBalance.module.scss';

interface CardBalanceProps {
    balance: number;
    limit: number;
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance, limit }) => {
    const available = limit - balance;

    return (
        <div className={`card ${styles.cardBalance}`}>
            <p className={styles.title}>Card Balance</p>
            <p className={styles.balanceAmount}>${balance.toFixed(2)}</p>
            <p className={styles.available}>${available.toFixed(2)} Available</p>
        </div>
    );
}

export default CardBalance;
