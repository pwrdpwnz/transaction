import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {Container} from "react-bootstrap";

import styles from './transactionDetails.module.scss'

interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
}

interface TransactionDetailsProps {
    transactions: Transaction[];
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({transactions}) => {
    const {id} = useParams<{ id: string }>();

    const transaction = transactions.find((transaction) => transaction.id === id);

    if (!transaction) {
        return <div>Транзакция не найдена.</div>;
    }

    return (
        <div className={styles.details}>
            <Link className={styles.nav} to="/"> {'<'} </Link>
            <Container>
                <p className={styles.summ}>${transaction.amount}</p>
                <p>{transaction.company}</p>
                <p>{transaction.date}</p>
                <p>{transaction.operation}</p>
                <p>Total ${transaction.amount}</p>
            </Container>
        </div>
    );
};

export default TransactionDetails;
