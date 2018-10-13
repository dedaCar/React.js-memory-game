import React from 'react';
import styles from './Card.module.css';


const Card = ({flipped, symbol}) => {
  let className = flipped ? styles.cardflipped : styles.cardNotFlipped;

  return (
    <div className={className}>
      <p className={styles.symbol}>{symbol}</p>
    </div>
  )
}

export default Card;
