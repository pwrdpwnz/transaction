import React from 'react';
import styles from './CardPoints.module.scss';

interface CardPointsProps {
    points: number;
}

const CardPoints: React.FC<CardPointsProps> = ({ points }) => {
    return (
        <div className={`card ${styles.cardPoints}`}>
            <p>Daily Points</p>
            <p className={styles.pointsAmount}>{points}K</p>
        </div>
    );
}

export default CardPoints;
