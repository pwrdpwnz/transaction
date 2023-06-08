import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../TransactionList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
    icon: IconProp;
}

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    const navigate = useNavigate();

    const handleItemClick = (transactionId: string) => {
        navigate(`/transaction-details/${transactionId}`);
    };

    return (
        <div className={styles.transactionList}>
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className={styles.transactionItem}
                    onClick={() => handleItemClick(transaction.id)}
                >
                    <div className={styles.imageContainer}>
                        <FontAwesomeIcon icon={transaction.icon} />
                    </div>
                    <div className={styles.textContainer}>
                        <p>{transaction.company}</p>
                        <p>{transaction.operation}</p>
                        <p>{transaction.date}</p>
                        <p>{transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}</p>
                    </div>
                    <Link to={`/transaction-details/${transaction.id}`} className={styles.detailsIcon}>
                        <span>&gt;</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
