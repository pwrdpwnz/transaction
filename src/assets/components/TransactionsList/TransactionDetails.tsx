import CardBalance from "./header/CardBalance/CardBalance.tsx";
import CardPayment from "./header/CardPayment/CardPayment.tsx";
import CardPoints from "./header/CardPoints/CardPoints.tsx";

import styles from './TransactionSection/TransactionList/transactionList.module.scss'


const TransactionDetails = () => {
    return (
        <div className={`container ${styles.cardsBox}`}>
            <CardBalance balance={17.3} available={1000} />
            <CardPoints  points={456}/>
            <CardPayment />
        </div>
    );
};

export default TransactionDetails;