import React from 'react';
import JsonData from './data/data.js';
import styles from './Card.module.css';
console.log(JsonData);




const Card = ({ element, handleFlip, id }) => {
  let flippedClass = element.active ? styles.cardFlipped : styles.cardNotFlipped;
  let cardClasses = `${styles.card} ${flippedClass}`

  let cardFace;
  if (element.active) {
    cardFace = (<div className={styles.front}>
      <p className={styles.symbol}>{element.symbol}</p>
    </div>);
  } else {
    cardFace = <div className={styles.back}></div>;
  }

  return (
    <div className={cardClasses} onClick={() => handleFlip(id)}>
      {cardFace}
    </div>
  )
}

export default Card;
