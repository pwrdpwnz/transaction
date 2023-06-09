import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './transactionList.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Container} from "react-bootstrap";

interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
    icon: IconProp;
    discount: number;
}

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({transactions}) => {

    const navigate = useNavigate();

    const handleItemClick = (transactionId: string) => {
        navigate(`/transaction-details/${transactionId}`);
    };

    return (
        <div className={styles.transactionList}>
            <Container>
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={styles.transactionItem}
                            onClick={() => handleItemClick(transaction.id)}
                        >
                            <div className={styles.imageContainer}>
                                <FontAwesomeIcon icon={transaction.icon}/>
                            </div>
                            <div className={styles.textContainer}>
                                <div className={styles.containerBox}>
                                    <div>
                                        <p className={styles.textOverflow}>
                                            {transaction.company}
                                        </p>

                                        <p className={styles.textOverflow}>
                                            {transaction.operation}
                                        </p>

                                        <p className={styles.textOverflow}>
                                            {transaction.date}
                                        </p>
                                    </div>
                                    <div className={styles.column}>
                                        <p className={styles.summ}> {transaction.amount > 0 ? `+${transaction.amount}$` : `${transaction.amount}$`}</p>
                                        <p>{transaction.discount}%</p>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/transaction-details/${transaction.id}`} className={styles.detailsIcon}>
                                <span>&gt;</span>
                            </Link>
                        </div>
                    ))}
            </Container>
        </div>
    );
};

export default TransactionList;
