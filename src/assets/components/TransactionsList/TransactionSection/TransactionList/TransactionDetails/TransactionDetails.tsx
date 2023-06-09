import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import styles from './transactionDetails.module.scss';

// Интерфейс для объекта транзакции
interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
    time: string;
    status: string;
}

// Интерфейс для пропсов компонента TransactionDetails
interface TransactionDetailsProps {
    transactions: Transaction[];
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({transactions}) => {
    const {id} = useParams<{ id: string }>();

    const transaction = transactions.find((transaction) => transaction.id === id);

    if (!transaction) {
        return <div>Транзакция не найдена.</div>; // Если транзакция не найдена, выводим сообщение
    }

    return (
        <div className={styles.details}>
            <Link className={styles.nav} to="/"> {'<'} </Link> {/* Ссылка для возврата на предыдущую страницу */}

            <Container>
                <p className={styles.summ}>${transaction.amount}</p>
                <p className={styles.company}>{transaction.company}</p>
                <div className={styles.textBox}>
                    <p>{transaction.date}</p>
                    <span>, </span>
                    <p>{transaction.time}</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.status}>
                        <p>Status: {transaction.status}</p>
                        <p>{transaction.operation}</p>
                    </div>
                    <div className={styles.operation}>
                        <p>Total</p>
                        <p>${transaction.amount}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TransactionDetails;
