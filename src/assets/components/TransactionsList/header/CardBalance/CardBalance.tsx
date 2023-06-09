import React from 'react';
import styles from './CardBalance.module.scss';

interface CardBalanceProps {
    balance: number;
    available: number;
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance, available }) => {
    return (
        <div className={`card ${styles.cardBalance}`}>
            <p className={styles.title}>Card Balance</p>
            <p className={styles.balanceAmount}>${balance.toFixed(2)}</p>
            <p className={styles.available}>${available} Available</p>
        </div>
    );
}

export default CardBalance;
