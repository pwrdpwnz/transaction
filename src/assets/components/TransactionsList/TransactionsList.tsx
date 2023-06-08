import styles from './style.module.scss'
import CardBalance from "./CardBalance/CardBalance.tsx";
import {Col, Row} from "react-bootstrap";

const TransactionsList = () => {
    return (
        <div className={styles.cardSection}>
            <Row>
                <Col xs={12} md={4}>
                    <CardBalance balance={17.3} available={1000}/>
                </Col>

            </Row>
        </div>
    );
};

export default TransactionsList;