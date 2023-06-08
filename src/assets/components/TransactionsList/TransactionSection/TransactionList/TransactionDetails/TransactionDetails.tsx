import React from 'react';
import {useParams, Link} from 'react-router-dom';

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

    // Найдите транзакцию по идентификатору
    const transaction = transactions.find((transaction) => transaction.id === id);

    // Проверка на наличие транзакции
    if (!transaction) {
        return <div>Транзакция не найдена.</div>;
    }

    return (
        <div>
            <h2>Детали транзакции</h2>
            <p>Компания: {transaction.company}</p>
            <p>Операция: {transaction.operation}</p>
            <p>Дата: {transaction.date}</p>
            <p>Сумма: {transaction.amount}</p>
            <Link to="/">Назад к списку транзакций</Link>
        </div>
    );
};

export default TransactionDetails;
