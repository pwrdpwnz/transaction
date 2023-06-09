import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './transactionList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Container } from 'react-bootstrap';

// Интерфейс для объекта транзакции
interface Transaction {
    id: string;
    company: string;
    operation: string;
    date: string;
    amount: number;
    icon: IconProp;
    discount: number;
}

// Интерфейс для компонента списка транзакций
interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {

    const navigate = useNavigate();

    // Обработчик клика по элементу списка транзакции
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
                            <FontAwesomeIcon icon={transaction.icon} />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.containerBox}>
                                <div>
                                    {/* Название компании */}
                                    <p className={styles.textOverflow}>
                                        {transaction.company}
                                    </p>

                                    {/* Описание операции */}
                                    <p className={styles.textOverflow}>
                                        {transaction.operation}
                                    </p>

                                    {/* Дата и время */}
                                    <p className={styles.textOverflow}>
                                        {transaction.date}
                                    </p>
                                </div>
                                <div className={styles.column}>
                                    {/* Сумма транзакции */}
                                    <p className={styles.summ}> {transaction.amount > 0 ? `+${transaction.amount}$` : `${transaction.amount}$`}</p>
                                    {/* Скидка */}
                                    <p>{transaction.discount}%</p>
                                </div>
                            </div>
                        </div>
                        {/* Ссылка на страницу деталей транзакции */}
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