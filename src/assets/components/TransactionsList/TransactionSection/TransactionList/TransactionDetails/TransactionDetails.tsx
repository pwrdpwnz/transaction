import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import styles from './transactionDetails.module.scss';

// Интерфейс для объекта транзакции
interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
}

// Интерфейс для пропсов компонента TransactionDetails
interface TransactionDetailsProps {
    transactions: Transaction[];
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ transactions }) => {
    const { id } = useParams<{ id: string }>();

    const transaction = transactions.find((transaction) => transaction.id === id);

    if (!transaction) {
        return <div>Транзакция не найдена.</div>; // Если транзакция не найдена, выводим сообщение
    }

    return (
        <div className={styles.details}>
            <Link className={styles.nav} to="/"> {'<'} </Link> {/* Ссылка для возврата на предыдущую страницу */}
            <Container>
                <p className={styles.summ}>${transaction.amount}</p> {/* Сумма транзакции */}
                <p>{transaction.company}</p> {/* Название компании */}
                <p>{transaction.date}</p> {/* Дата и время */}
                <p>{transaction.operation}</p> {/* Описание операции */}
                <p>Total ${transaction.amount}</p> {/* Общая сумма */}
            </Container>
        </div>
    );
};

export default TransactionDetails;
