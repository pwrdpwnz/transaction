import React from 'react';
import styles from './CardBalance.module.scss';

// Интерфейс для пропсов компонента CardBalance
interface CardBalanceProps {
    balance: number; // Баланс карты
    limit: number; // Лимит карты
}

const CardBalance: React.FC<CardBalanceProps> = ({ balance, limit }) => {
    const available = limit - balance; // Доступный остаток на карте

    return (
        <div className={`card ${styles.cardBalance}`}>
            <p className={styles.title}>Card Balance</p> {/* Заголовок компонента */}
            <p className={styles.balanceAmount}>${balance.toFixed(2)}</p> {/* Сумма баланса */}
            <p className={styles.available}>${available.toFixed(2)} Available</p> {/* Доступный остаток */}
        </div>
    );
}

export default CardBalance;
