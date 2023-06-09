import React from "react";
import styles from './header.module.scss'
import CardBalance from "./CardBalance/CardBalance.tsx";
import CardPoints from "./CardPoints/CardPoints.tsx";
import CardPayment from "./CardPayment/CardPayment.tsx";
import {Col, Container, Row} from "react-bootstrap";


const Header: React.FC = () => {
    const balance = 777;
    const limit= 1500;

    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.cardContainer}>
                            <CardBalance limit={limit} balance={balance} />
                            <CardPoints points={435}/>
                        </div>
                    </Col>
                    <Col>
                        <CardPayment/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;