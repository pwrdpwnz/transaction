import React from "react";
import styles from './header.module.scss'
import CardBalance from "./CardBalance/CardBalance.tsx";
import CardPoints from "./CardPoints/CardPoints.tsx";
import CardPayment from "./CardPayment/CardPayment.tsx";
import {Col, Container, Row} from "react-bootstrap";


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.cardContainer}>
                            <CardBalance balance={14.34} available={1000}/>
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