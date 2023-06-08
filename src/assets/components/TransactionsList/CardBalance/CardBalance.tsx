import {Card} from "react-bootstrap";

interface CardBalanceProps {
    balance: number;
    available: number;
}

const CardBalance = ( {balance, available}: CardBalanceProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Card Balance</Card.Title>
                <Card.Text>${balance.toFixed(2)}</Card.Text>
                <Card.Text>${available.toFixed(2)}</Card.Text>
                <Card.Text>${available.toFixed(2)} Available</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardBalance;